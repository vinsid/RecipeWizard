
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingRecipe: React.FC = () => {
  return (
    <Card className="w-full shadow-md animate-pulse">
      <CardContent className="pt-6 pb-6">
        <div className="recipe-section">
          <Skeleton className="h-10 w-3/4 mb-3" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-5/6" />
        </div>

        <div className="recipe-section">
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-11/12" />
            <Skeleton className="h-6 w-10/12" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>

        <div className="recipe-section">
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-11/12" />
            <Skeleton className="h-6 w-10/12" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Skeleton className="h-6 w-28" />
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingRecipe;
