import React from 'react';

const quote = '"';

const HeaderContent = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap items-center justify-between mt-32 md:flex-no-wrap">
        <div className="max-w-4xl text-center sm:text-left">
          <h1 className="text-xl font-light text-white md:text-2xl lg:text-3xl xl:text-4xl wow fadeInDown">
            {quote}
            Simplicity carried to an extreme, becomes elegance.
            {quote}
          </h1>
          {/* <h2 className="mt-32 text-4xl text-purple-700">
          <span>s</span>
          <strong>Daniel</strong>
        </h2> */}
        </div>
        {/* <img
          src="/img/undraw_progressive_app_m9ms.svg"
          alt=""
          className="h-auto max-w-xs p-8 mx-auto sm:max-w-xs md:max-w-md lg:max-w-lg"
        /> */}
      </div>

      <ul className="mt-32 ml-4 text-lg leading-loose text-gray-200 list-disc ">
        <li>
          <h2>Web Developer</h2>
        </li>
        <li>
          <h2>Web Designer</h2>
        </li>
        <li>
          <h2>
            <span>UI & UX </span>
            <span className="text-purple-500">Engineer</span>
          </h2>
        </li>
      </ul>
    </div>
  );
};

HeaderContent.propTypes = {};

export default HeaderContent;
