import Project from "@/models/projectModals";
import dbConnect from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    console.log('im hitting it')
    await dbConnect();
    
    try {
        const project = await Project.findById(id);
        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }
        return NextResponse.json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
    }
}