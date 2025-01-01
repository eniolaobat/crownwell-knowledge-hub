import { Card } from "@/components/ui/card";
import { BookOpen, BrainCircuit, MessageSquareMore, Workflow } from "lucide-react";
import { Category } from "./types";

interface CategoryListProps {
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
  correctAnswers: number;
  totalAnswered: number;
}

export default function CategoryList({
  categories,
  onCategorySelect,
  correctAnswers,
  totalAnswered,
}: CategoryListProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Practice Topics</h2>
        <div className="text-sm text-muted-foreground">
          Overall Progress: {Math.round((correctAnswers / Math.max(totalAnswered, 1)) * 100)}%
        </div>
      </div>
      <div className="space-y-3">
        {categories.flatMap(category => 
          category.subcategories.map((subcategory, index) => (
            <Card 
              key={`${category.id}-${index}`}
              className="p-4 hover:bg-accent/5 transition-colors cursor-pointer"
              onClick={() => onCategorySelect(`${category.id}-${index}`)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {category.icon}
                  <div>
                    <h3 className="font-medium">{subcategory.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      0/{subcategory.questionCount} Questions
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-4 border-muted flex items-center justify-center">
                    <span className="text-sm font-medium">{subcategory.progress}%</span>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}