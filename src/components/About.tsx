import React from "react";
import { ActivityIcon, PenLine } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section
      className="mt-12 flex scroll-mt-28 flex-col items-center"
      id="about"
    >
      <PenLine className="h-12 w-12 text-muted-foreground" />
      <h2 className="text-2xl font-semibold">About Us</h2>
      <div className="mt-2 max-w-prose rounded-xl bg-foreground/10 px-9 pb-2 pt-8 text-sm">
        <p className="first">Here&apos;s what we can do together</p>
        <ul className="mt-4 flex flex-col items-center ">
          <li className="mt-3">
            🌱 <strong>Begin Your Journey</strong> - Embark on a path of
            thoughtful creation with us. Click here to explore the possibilities
            and start shaping your literary dreams into reality.
          </li>
          <li className="mt-3">
            🌻 <strong>Cultivate Your Story</strong> - Your narrative is a seed
            waiting to bloom. Reach out today, and let us help you grow your
            ideas into a captivating story that resonates with readers.
          </li>
          <li className="mt-3">
            📚 <strong>Explore Our Workshops</strong> - Dive into the depths of
            writing artistry. Join our workshops to refine your skills, connect
            with fellow writers, and bring new dimensions to your work.
          </li>
          <li className="mt-3">
            🌟 <strong>Share Your Vision</strong> - Your unique story deserves
            an audience. Submit your manuscript to us and let&apos;s collaborate
            to bring your visionary narrative to the world.
          </li>
          <li className="mt-3">
            🔊 <strong>Amplify Your Voice</strong> - Make sure your voice is
            heard far and wide. Discover how our social media marketing
            expertise can elevate your presence and introduce your words to a
            broader audience.
          </li>
        </ul>

        <ActivityIcon className="divIcon2 mx-auto" />
      </div>
    </section>
  );
};

export default About;
