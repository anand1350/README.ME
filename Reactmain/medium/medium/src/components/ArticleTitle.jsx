import mainimg from "../images/mainimg.png";
import ArticleFooter from "./ArticleFooter";

export default function ArticleTitle() {
  return (
    <div>
      <h4>The best New Year's resolutions you can make</h4>
      <div>Resolutions that actually work, according to dexision scientist</div>
      <div>
        Happy almost-2023! Chances are that you’re contemplating making some New
        Year’s resolutions, so let’s get you set up for success with a few
        resolutions that will unlock the best version of you.
      </div>
      <div>
        <img className="img-fluid" src={mainimg} alt="" />
        <div>
          <p className="d-flex justify-content-center">
            All copyright belongs to the author.
          </p>
        </div>
      </div>
      <div>
        <h5>#1 - Resolve to stop borrowing resolutions</h5>
        <div>
          Different people are different, so what works for you might not be
          what works for anyone else.
        </div>
        <div>
          Understanding this is the single biggest step you can take in the
          direction of success. That’s precisely why I’m not going to do the
          standard guru thing of suggesting you copy my exact wellness plan
          after proving to you that I have a stack of credentials (I do) and I’m
          in shape (I am). My plan fits me, but you need a plan that fits you.
        </div>
        <h5>Quit borrowing other people’s resolutions</h5>
        <div>
          Whenever you’re tempted to copy your favorite celeb’s latest health
          plan, take a moment to think about some potential reasons that person
          is able to stick with it (assuming they are) which you might not know
          about. Do they have a private chef who prevents them from making food
          decisions? Do they secretly loooove cabbage? Is their job less
          stressful than yours? And so on.
        </div>
      </div>
      <ArticleFooter />
    </div>
  );
}
