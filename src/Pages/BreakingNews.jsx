import Marquee from "react-fast-marquee";

export const BreakingNews = () => {
  return (
    <div className="flex items-center mt-8 bg-slate-100 p-3">
      <button className="btn btn-sm rounded-none text-white btn-error">
        Latest
      </button>
      <Marquee speed={100} pauseOnHover={true}>
          <p className="ml-2">I can be a React component, multiple React components, or just some
          text....</p>
          <p className="ml-2">I can be a React component, multiple React components, or just some
          text....</p>
          <p className="ml-2">I can be a React component, multiple React components, or just some
          text....</p>
          <p className="ml-2">I can be a React component, multiple React components, or just some
          text....</p>
        </Marquee>
    </div>
  );
};
