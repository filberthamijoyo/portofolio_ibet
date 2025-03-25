"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            I'm a passionate frontend developer with a strong foundation in modern web technologies. 
            I love creating responsive, user-friendly interfaces that provide exceptional user experiences.
          </p>
          <p className="text-lg mb-6">
            My journey in web development started during my undergraduate studies, where I discovered my 
            passion for building beautiful and functional websites. Since then, I've been continuously 
            learning and improving my skills to stay current with the latest trends and best practices.
          </p>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">HTML & CSS</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">React</span>
                  <span>80%</span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Tailwind CSS</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 