import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useRef, useState } from "react";
// import ResponseSection from "./ResponseSection";
//generate an api key from google gemini to
const APIKEY = "";
const genAI = new GoogleGenerativeAI(APIKEY);

function ChatBotPage() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    const textArea = inputRef.current;
    if (textArea) {
      textArea.style.height = "44px";
    }
    textArea?.addEventListener("change", (e) => {
      const targetTextArea = e.target as HTMLTextAreaElement;
      if (targetTextArea) {
        console.log(targetTextArea.scrollHeight);
        const scHeight = targetTextArea.scrollHeight;
        textArea.style.height = `${scHeight}px`;
      }
    });
  }, []);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="h-full w-full min-h-screen flex flex-col p-4 items-center justify-center gap-4 max-w-5xl">
        <div className="grow items-center justify-center flex border-[3px] border-primary bg-white">
          {answer ? (
            // <ResponseSection botCardText={answer/>
            <div className="p-6 gap-4 flex flex-col">
              <p className="font-bold">Eduken:</p>
              <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
          ) : (
            <div className="w-[840px] flex items-center justify-center">
              Ask Eduken
            </div>
          )}
        </div>
        <div className="max-w-5xl flex items-center justify-center w-full">
          <form
            action=""
            className="items-center justify-center flex w-full border-[3px] border-primary"
            onSubmit={(e) => {
              e.preventDefault();
              const model = genAI.getGenerativeModel({ model: "gemini-pro" });
              async function run() {
                const context = `
                use the following text to answer any further questions. USE NOTHING ELSE

                This recommendation system uses a structured approach to match user profiles with the most suitable courses, ensuring relevance, quality, and feasibility. By aligning course attributes with the user’s background, interests, career goals, skill level, and learning preferences, we can provide personalized and effective course recommendations.
                
                Recommending courses involves considering various aspects such as the user’s background, interests, career goals, and the course attributes. Here’s a detailed system for recommending courses:
                
                ### Step 1: Understanding User Profiles
                
                1. **User Background and Interests**: Collect information on the user’s educational background, professional experience, and specific interests within the cybersecurity field.
                2. **Career Goals**: Determine the user’s short-term and long-term career goals.
                3. **Skill Level**: Assess the user’s current skill level in various cybersecurity domains.
                4. **Learning Preferences**: Identify the user’s preferred learning style and time availability for course completion.
                
                ### Step 2: Course Attributes
                
                1. **Average Rating**: Courses with higher average ratings are generally more reliable and well-received.
                2. **Backed Companies**: The credibility of the backing companies can indicate the course’s industry relevance.
                3. **Hours to Completion**: Align courses with the user’s availability.
                4. **Tags and Topics**: Match course topics with the user’s interests and career goals.
                5. **Number of Enrollments**: High enrollment numbers can indicate popular and potentially valuable courses.
                6. **Course Badge**: Consider any special recognition or badges the course may have earned.
                
                ### Step 3: Filtering and Matching
                
                1. **Relevance**: Filter courses based on tags and topics that match the user’s interests.
                2. **Quality**: Prioritize courses with high average ratings and reputable backing companies.
                3. **Feasibility**: Ensure the course duration fits within the user’s available time.
                4. **Popularity**: Consider the number of enrollments as a factor for social proof and course effectiveness.
                
                ### Step 4: Recommendations
                
                Using the given data, here are recommendations for hypothetical user profiles:
                
                #### Example Profiles and Recommendations
                
                **Profile 1: Entry-Level Cybersecurity Enthusiast**
                
                - **Background**: Recent graduate with a degree in computer science.
                - **Interests**: Cybersecurity basics, network security, privacy law.
                - **Career Goals**: Entry-level cybersecurity analyst.
                - **Skill Level**: Beginner.
                - **Availability**: Can dedicate 10 hours per week to learning.
                
                **Recommended Courses**:
                
                1. **Network Security Several Course 1**
                   - **Rating**: 5
                   - **Hours**: 15
                   - **Tags**: Network Security, Privacy Law, National Security
                   - **Reason**: High rating, relevant tags, foundational knowledge in network security.
                   
                2. **Privacy Law Go Course 1**
                   - **Rating**: 4.3
                   - **Hours**: 3
                   - **Tags**: Privacy Law, Cybersecurity, National Security
                   - **Reason**: Concise duration, strong rating, focus on privacy law which is crucial for an entry-level analyst.
                   
                3. **Cloud Security Control Course 2**
                   - **Rating**: 3.4
                   - **Hours**: 8
                   - **Tags**: National Security, Privacy Law, Cryptography
                   - **Reason**: Moderate rating, covers cloud security which is essential for modern cybersecurity.
                   
                4. **Cryptography Tough Course 2**
                   - **Rating**: 4.1
                   - **Hours**: 3
                   - **Tags**: Cloud Security, Network Security, Cryptography
                   - **Reason**: Strong rating, essential cryptography skills, short duration.
                
                **Profile 2: Mid-Level Professional Seeking Specialization**
                
                - **Background**: 5 years of experience in IT, currently working in network administration.
                - **Interests**: Digital forensics, advanced network security, data privacy.
                - **Career Goals**: Specialize in digital forensics and become a cybersecurity expert.
                - **Skill Level**: Intermediate.
                - **Availability**: Can dedicate 5 hours per week to learning.
                
                **Recommended Courses**:
                
                1. **Digital Forensics War Course 2**
                   - **Rating**: 2.8
                   - **Hours**: 10
                   - **Tags**: Digital Forensics, Network Security, Cybersecurity
                   - **Reason**: Focus on digital forensics, aligns with career goal of specialization.
                   
                2. **Data Privacy One Course 3**
                   - **Rating**: 4.5
                   - **Hours**: 9
                   - **Tags**: Cybersecurity, Cloud Security, Network Security
                   - **Reason**: High rating, covers data privacy which is crucial for forensics.
                   
                3. **Network Security Inside Course 2**
                   - **Rating**: 4.9
                   - **Hours**: 13
                   - **Tags**: Network Security, Digital Forensics
                   - **Reason**: Very high rating, enhances network security skills.
                   
                4. **Digital Forensics Through Course 1**
                   - **Rating**: 3.1
                   - **Hours**: 12
                   - **Tags**: Data Privacy, National Security, Information Security
                   - **Reason**: Relevant to digital forensics, covers comprehensive security topics.
                
                **Profile 3: Senior Executive Focused on Policy and Management**
                
                - **Background**: 10+ years in cybersecurity management.
                - **Interests**: Privacy law, national security, cybersecurity policy.
                - **Career Goals**: Influence cybersecurity policy at a national level.
                - **Skill Level**: Advanced.
                - **Availability**: Can dedicate 2 hours per week to learning.
                
                **Recommended Courses**:
                
                1. **Privacy Law Officer Course 3**
                   - **Rating**: 4.7
                   - **Hours**: 13
                   - **Tags**: National Security, Cloud Security, Cybersecurity
                   - **Reason**: High rating, relevant to privacy law and national security, executive-level focus.
                   
                2. **National Security Source Course 1**
                   - **Rating**: 1.6
                   - **Hours**: 7
                   - **Tags**: National Security, Cryptography
                   - **Reason**: Focus on national security, though lower rating, can be supplemented with additional resources.
                   
                3. **Privacy Law Evidence Course 3**
                   - **Rating**: 4.9
                   - **Hours**: 13
                   - **Tags**: Network Security, Data Privacy
                   - **Reason**: Very high rating, comprehensive coverage of privacy law.
                   
                4. **Surveillance Studies About Course 3**
                   - **Rating**: 3.1
                   - **Hours**: 9
                   - **Tags**: Cloud Security, Network Security, Data Privacy
                   - **Reason**: Moderate rating, relevant to surveillance and policy.
                
                ### Conclusion
                
                This recommendation system uses a structured approach to match user profiles with the most suitable courses, ensuring relevance, quality, and feasibility. By aligning course attributes with the user’s background, interests, career goals, skill level, and learning preferences, we can provide personalized and effective course recommendations.`;
                if (inputRef.current) {
                  const prompt = `
                ${context}
                

                Request: ${inputRef.current.value}
                
                Properly address the request.
                `;

                  const result = await model.generateContent(prompt);
                  const response = await result.response;
                  const text = response.text();
                  console.log(text);
                  setAnswer(text);
                }
              }

              run();
            }}
          >
            <textarea
              id="prompt"
              ref={inputRef}
              placeholder="Enter description..."
              required
              name="text"
              className="p-2 bg-white w-full resize-none outline-none focus:border-green border-2 text-primary max-h-48"
            ></textarea>
            <button
              className={`bg-chelsea min-h-12 transition-colors duration-300 bg-first-accent text-white bg-green hover:bg-second-accent pt-3 pb-3 pl-10 pr-10`}
            >
              Generate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBotPage;
