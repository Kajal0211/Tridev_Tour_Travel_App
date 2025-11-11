import sql from "@/app/api/utils/sql";

// GET - List all taxi services
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const vehicleType = searchParams.get('vehicle_type');

    let query = 'SELECT * FROM taxi_services WHERE 1=1';
    const params = [];
    let paramCount = 0;

    if (vehicleType) {
      paramCount++;
      query += ` AND vehicle_type = $${paramCount}`;
      params.push(vehicleType);
    }

    query += ' ORDER BY capacity ASC';

    const services = await sql(query, params);
    
    return Response.json({ success: true, data: services });
  } catch (error) {
    console.error('Error fetching taxi services:', error);
    return Response.json({ success: false, error: 'Failed to fetch taxi services' }, { status: 500 });
  }
}

// POST - Create new taxi service
export async function POST(request) {
  try {
    const { vehicle_type, vehicle_name, capacity, features, base_rate_per_km, image_url } = await request.json();

    if (!vehicle_type || !vehicle_name || !capacity || !base_rate_per_km) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO taxi_services (vehicle_type, vehicle_name, capacity, features, base_rate_per_km, image_url)
      VALUES (${vehicle_type}, ${vehicle_name}, ${capacity}, ${features}, ${base_rate_per_km}, ${image_url})
      RETURNING *
    `;

    return Response.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Error creating taxi service:', error);
    return Response.json({ success: false, error: 'Failed to create taxi service' }, { status: 500 });
  }
}


