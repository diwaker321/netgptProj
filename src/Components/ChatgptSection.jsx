import React, { useRef } from "react";
import { client } from "../utils/OpenAI";
import { model } from "../utils/geminiAI";

const ChatgptSection = () => {
  const inputref = useRef();

  const handleAISearch = async () => {
    // const userPromt = inputref?.current?.value;
    const userPromt = `
You are a movie recommendation assistant.

Based on the user's query, suggest only 5 movies that best match the mood or genre.

Rules:
- Return only movie names
- Keep the response short
- Movie names should be comma separated
- Do not add numbering
- Do not add explanations

User Query: ${inputref?.current?.value}
`;
    console.log(inputref?.current?.value);

    const response = await model.generateContent(userPromt);
  console.log(result.response.text());
  };
  return (
    <div className="chatgptSection bg-black h-screen flex justify-center items-center flex-col ">
      <div className="mb-5">
        <h1 className="text-white text-3xl font-semibold">
          What’s on your mind today?
        </h1>
      </div>
      <div>
        <input
          ref={inputref}
          autoFocus
          className=" w-130 py-4 px-4 rounded-2xl text-white bg-gray-800"
          type="text"
          name=""
          id=""
          placeholder="Ask Anything..."
          
        />
        <i
          onClick={handleAISearch}
          className="fa-solid fa-arrow-up text-lg cursor-pointer hover:text-white hover:bg-black hover:scale-110 transition-all duration-200 text-black bg-white p-3 rounded-lg relative right-12"
        ></i>
      </div>
    </div>
  );
};

export default ChatgptSection;
