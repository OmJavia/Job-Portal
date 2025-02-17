const JobCard = ({ job }) => {
  return (
    <div className="relative border border-white/20 backdrop-blur-md bg-white/10 shadow-xl p-6 rounded-lg transition-all duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold text-white">{job.title}</h2>
      <p className="text-gray-300">{job.location} | {job.experience} Years</p>
      <p className="text-primary font-bold">💰 CTC: {job.maxCTC} LPA</p>
      <button className="mt-3 px-4 py-2 bg-secondary text-white rounded-full shadow-md hover:bg-primary transition-all">
        Apply Now 🚀
      </button>
    </div>
  );
};

export default JobCard;
