import { useState } from "react"

const SkillsDisplay = ({ skills }) => {
  const [activeSection, setActiveSection] = useState("languages")

  // Categories for the skills
  const categories = [
    { id: "languages", label: "Languages" },
    { id: "web", label: "Web Technologies" },
    { id: "ml", label: "Machine Learning" },
    { id: "tools", label: "Tools" },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Category Selector */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-start">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveSection(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeSection === category.id
                ? "bg-slate-800 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="min-h-[200px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills[activeSection]?.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <img
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsDisplay
