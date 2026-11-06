import { projectData } from "@/constants/const";
import ProjectDetail from "./ProjectDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(projectData).map((projectId) => ({ projectId }));
}

type Props = {
  params: Promise<{ projectId: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { projectId } = await params;
  return <ProjectDetail projectId={projectId} />;
}
