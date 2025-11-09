import sql from "@/app/api/utils/sql";

// GET - List all destinations with optional filtering
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const popular = searchParams.get('popular');
    const state = searchParams.get('state');

    let query = 'SELECT * FROM destinations WHERE 1=1';
    const params = [];
    let paramCount = 0;

    if (category) {
      paramCount++;
      query += ` AND category = $${paramCount}`;
      params.push(category);
    }

    if (popular === 'true') {
      query += ' AND popular = true';
    }

    if (state) {
      paramCount++;
      query += ` AND state = $${paramCount}`;
      params.push(state);
    }

    query += ' ORDER BY popular DESC, name ASC';

    const destinations = await sql(query, params);
    
    return Response.json({ success: true, data: destinations });
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return Response.json({ success: false, error: 'Failed to fetch destinations' }, { status: 500 });
  }
}

// POST - Create new destination
export async function POST(request) {
  try {
    const { name, location, description, image_url, category, state, popular } = await request.json();

    if (!name || !location || !category || !state) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO destinations (name, location, description, image_url, category, state, popular)
      VALUES (${name}, ${location}, ${description}, ${image_url}, ${category}, ${state}, ${popular || false})
      RETURNING *
    `;

    return Response.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Error creating destination:', error);
    return Response.json({ success: false, error: 'Failed to create destination' }, { status: 500 });
  }
}