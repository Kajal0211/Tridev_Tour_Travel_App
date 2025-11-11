import sql from "@/app/api/utils/sql";

// GET - List travel bookings
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('user_id');
    const status = searchParams.get('status');

    let query = `
      SELECT 
        tb.*,
        u.full_name, u.email, u.phone,
        tp.title as package_title, tp.duration_days,
        d.name as destination_name, d.location
      FROM travel_bookings tb
      LEFT JOIN users u ON tb.user_id = u.id
      LEFT JOIN travel_packages tp ON tb.package_id = tp.id
      LEFT JOIN destinations d ON tp.destination_id = d.id
      WHERE 1=1
    `;
    const params = [];
    let paramCount = 0;

    if (userId) {
      paramCount++;
      query += ` AND tb.user_id = $${paramCount}`;
      params.push(userId);
    }

    if (status) {
      paramCount++;
      query += ` AND tb.booking_status = $${paramCount}`;
      params.push(status);
    }

    query += ' ORDER BY tb.created_at DESC';

    const bookings = await sql(query, params);
    
    return Response.json({ success: true, data: bookings });
  } catch (error) {
    console.error('Error fetching travel bookings:', error);
    return Response.json({ success: false, error: 'Failed to fetch travel bookings' }, { status: 500 });
  }
}

// POST - Create new travel booking
export async function POST(request) {
  try {
    const { 
      user_id, package_id, travel_date, number_of_people, 
      total_amount, special_requests 
    } = await request.json();

    if (!user_id || !package_id || !travel_date || !number_of_people) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO travel_bookings (
        user_id, package_id, travel_date, number_of_people, 
        total_amount, special_requests
      )
      VALUES (
        ${user_id}, ${package_id}, ${travel_date}, ${number_of_people},
        ${total_amount}, ${special_requests}
      )
      RETURNING *
    `;

    return Response.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Error creating travel booking:', error);
    return Response.json({ success: false, error: 'Failed to create travel booking' }, { status: 500 });
  }
}


