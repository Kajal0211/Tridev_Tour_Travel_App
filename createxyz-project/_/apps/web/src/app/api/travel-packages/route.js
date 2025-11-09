import sql from "@/app/api/utils/sql";

// GET - List all travel packages with optional filtering
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const destination = searchParams.get('destination');
    const duration = searchParams.get('duration');

    let query = `
      SELECT tp.*, d.name as destination_name, d.location as destination_location, d.state
      FROM travel_packages tp
      LEFT JOIN destinations d ON tp.destination_id = d.id
      WHERE 1=1
    `;
    const params = [];
    let paramCount = 0;

    if (category) {
      paramCount++;
      query += ` AND tp.category = $${paramCount}`;
      params.push(category);
    }

    if (destination) {
      paramCount++;
      query += ` AND d.name ILIKE $${paramCount}`;
      params.push(`%${destination}%`);
    }

    if (duration) {
      paramCount++;
      query += ` AND tp.duration_days <= $${paramCount}`;
      params.push(parseInt(duration));
    }

    query += ' ORDER BY tp.created_at DESC';

    const packages = await sql(query, params);
    
    return Response.json({ success: true, data: packages });
  } catch (error) {
    console.error('Error fetching travel packages:', error);
    return Response.json({ success: false, error: 'Failed to fetch travel packages' }, { status: 500 });
  }
}

// POST - Create new travel package
export async function POST(request) {
  try {
    const { 
      title, description, duration_days, destination_id, 
      inclusions, exclusions, itinerary, image_url, 
      category, available_from, available_to, max_people 
    } = await request.json();

    if (!title || !duration_days || !destination_id || !category) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO travel_packages (
        title, description, duration_days, destination_id, 
        inclusions, exclusions, itinerary, image_url, 
        category, available_from, available_to, max_people
      )
      VALUES (
        ${title}, ${description}, ${duration_days}, ${destination_id},
        ${inclusions}, ${exclusions}, ${itinerary}, ${image_url},
        ${category}, ${available_from}, ${available_to}, ${max_people}
      )
      RETURNING *
    `;

    return Response.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Error creating travel package:', error);
    return Response.json({ success: false, error: 'Failed to create travel package' }, { status: 500 });
  }
}