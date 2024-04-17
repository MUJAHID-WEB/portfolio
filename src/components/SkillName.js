export default function SkillName({name}) {
  return (
    <div className="group relative overflow-hidden rounded-xl mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent bo">
      <h3 className="bg-gray-700 border-white rounded-xl px-5 py-3 text-white font-semibold text-lg">
        {name}
      </h3>
    </div>
  );
}
