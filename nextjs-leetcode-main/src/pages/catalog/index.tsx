import React, { useState } from 'react';
import Topbar from "@/components/Topbar/Topbar";
import SideBar from '@/components/CatalogPageSideBar/SideBar'; // Check the file path and casing


const CatalogPage: React.FC = () => {
  const [selectedLessonContent, setSelectedLessonContent] = useState<string | null>(null);

  const handleLessonSelection = (content: string) => {
    setSelectedLessonContent(content);
  };

  return (
    <main>
      <div className="bg-purple-200 min-h-screen text-white flex">
        <SideBar handleLessonSelection={handleLessonSelection} />
        <Topbar />
        <div className="flex-grow">
          {selectedLessonContent && (
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">Selected Lesson</h2>
              <p>{selectedLessonContent}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;