import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const features: FeatureProps[] = [
  {
    title: "Comprehensive Courses",
    description: "Access a wide range of courses from industry experts",
    icon: "📚",
  },
  {
    title: "Interactive Learning",
    description: "Learn through interactive exercises and quizzes",
    icon: "🎓",
  },
  {
    title: "Progress Tracking",
    description: "Track your progress and see your growth",
    icon: "🔍",
  },
  {
    title: "Community Support",
    description:
      "Join a community of learners and get support from our team of experts",
    icon: "👥",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant={"outline"}>The Future of online education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate your learning experience
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[700px]">
            Discover a new way to learn with our modern, interactive learning
            management system. Access high-quality courses from anywhere,
            anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href={"/courses"}
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Explore Courses
            </Link>

            <Link
              href={"/login"}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
