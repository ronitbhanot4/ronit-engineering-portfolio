import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  images?: string[];
  link?: string;
}

export const ProjectCard = ({ title, description, technologies, image, images, link }: ProjectCardProps) => {
  const cardContent = (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-2 h-full">
      <div className="relative h-48 overflow-hidden bg-muted flex items-center justify-center">
        {images && images.length > 0 ? (
          <div className="flex w-full h-full">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`${title} ${index + 1}`} className="flex-1 h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
        ) : image ? (
          <img src={image} alt={title} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="text-6xl font-display text-muted-foreground/30">{title[0]}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
          {link && (
            <ExternalLink className="h-6 w-6 text-primary" />
          )}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-display flex items-center gap-2">
          {title}
          {link && <ExternalLink className="h-4 w-4 text-primary" />}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};
