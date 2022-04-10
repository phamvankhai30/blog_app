import { useContext } from "react";
import { Context } from "../../context/Context";
import "./about.css";
export default function About() {
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  return (
    <div className="container">
      <div className="postTitle1">ABOUT</div>
      <div className="pots-center">
        {user ? (
          <img
            // src="https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-4.jpg"
            src={PF + user.profilePic}
            alt=""
            className="image"
          />
        ) : (
          <img
            src="https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-4.jpg"
            // src={PF + user.profilePic}
            alt=""
            className="image"
          />
        )}

        <p className="content">
          My name is Thu and I’m a Vietnamese. I am twenty-four years old. I
          live in Ho Chi Minh city in the south of Vietnam. I have a big family
          with six people. I have two sisters and a brother. My sisters are
          older and my brother is younger than me. My father is a teacher at a
          secondary school. He has worked for 35 years in the field and he is my
          biggest role model in life. My mother is a housewife. She is nice and
          she is really good at cooking. I love my family so much. I’m a
          generous and easy-going person but when it comes to work I’m a
          competitive perfectionist. I’m also an optimistic and outgoing person
          so I have many friends and other social relationships. I enjoy
          reading, writing and doing math. I decided to become a Civil Engineer
          because have always been fascinated by bridges, buildings, and
          skyscrapers. A degree in Civil Engineering enables me to achieve my
          goals and also gives me an opportunity to make a difference in the
          community. Five years from now, I want to become a project manager of
          a constructions project, As a project manager, my primary goals are
          managing people, set budgets, and making decisions of all kinds. I
          also want to speak English fluently so I can work with people from
          different countries.
        </p>
      </div>
      <div className="postbottom">
        <p className="content">
          Meh synth Schlitz, tempor duis single-origin coffee ea next level
          ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella,
          PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian
          Truffaut synth art party deep v chillwave. Seitan High Life
          reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit
          bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter
          seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep
          v cliche lomo.
        </p>
      </div>
      <div className="postbottom">
        <p className="content">
          Meh synth Schlitz, tempor duis single-origin coffee ea next level
          ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella,
          PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian
          Truffaut synth art party deep v chillwave. Seitan High Life
          reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit
          bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter
          seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep
          v cliche lomo.
        </p>
      </div>
    </div>
  );
}
