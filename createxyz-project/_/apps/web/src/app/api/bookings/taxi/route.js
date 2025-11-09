import sql from "@/app/api/utils/sql";

// GET - List taxi bookings
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('user_id');
    const status = searchParams.get('status');

    let query = `
      SELECT 
        tb.*,
        u.full_name, u.email, u.phone,
        ts.vehicle_type, ts.vehicle_name, ts.capacity
      FROM taxi_bookings tb
      LEFT JOIN users u ON tb.user_id = u.id
      LEFT JOIN taxi_services ts ON tb.taxi_service_id = ts.id
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
    console.error('Error fetching taxi bookings:', error);
    return Response.json({ success: false, error: 'Failed to fetch taxi bookings' }, { status: 500 });
  }
}

// POST - Create new taxi booking
export async function POST(request) {
  try {
    const { 
      user_id, taxi_service_id, pickup_location, drop_location, 
      pickup_datetime, estimated_distance, total_amount 
    } = await request.json();

    if (!user_id || !taxi_service_id || !pickup_location || !drop_location || !pickup_datetime) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO taxi_bookings (
        user_id, taxi_service_id, pickup_location, drop_location, 
        pickup_datetime, estimated_distance, total_amount
      )
      VALUES (
        ${user_id}, ${taxi_service_id}, ${pickup_location}, ${drop_location},
        ${pickup_datetime}, ${estimated_distance}, ${total_amount}
      )
      RETURNING *
    `;

    return Response.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Error creating taxi booking:', error);
    return Response.json({ success: false, error: 'Failed to create taxi booking' }, { status: 500 });
  }
}