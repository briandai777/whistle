import Link from "next/link";

export default function Legal() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* BACK */}
        <Link
          href="/"
          className="text-green-700 font-semibold hover:text-green-800 transition"
        >
          ← Back to Whistle
        </Link>

        {/* HEADER */}
        <div className="mt-8 border-b border-gray-200 pb-10">
          <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
            Whistle
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Legal & Content Information
          </h1>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            This page explains how Whistle uses third-party content, how
            videos are displayed, and the relationship between Whistle and
            the platforms, organizations, and rights holders whose content
            may appear through embedded services.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: August 2026
          </p>
        </div>

        <div className="mt-12 space-y-12">

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              1. About Whistle
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle is an independent, nonprofit educational project
              created to give soccer referees additional opportunities to
              practice making decisions using real match situations.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The purpose of Whistle is referee education and training.
              Referees can watch an incident, make a decision, and then review
              an explanation of the play. Whistle is intended to supplement,
              rather than replace, formal referee education, instruction,
              assessment, or the official Laws of the Game.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              2. Third-Party Video Content
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle does not claim ownership of third-party match footage
              displayed through the website.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Videos used in Whistle training scenarios are displayed through
              third-party video services, including YouTube. Whistle does not
              represent that it owns the underlying match footage, broadcast,
              recording, commentary, graphics, trademarks, or other material
              contained in those videos.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Ownership and other rights associated with third-party videos
              remain with their respective creators, uploaders, broadcasters,
              leagues, clubs, organizations, licensors, and other applicable
              rights holders.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              3. How YouTube Videos Are Displayed
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle does not download and then re-upload YouTube videos in
              order to present its training scenarios. Instead, YouTube-hosted
              videos are displayed using YouTube&apos;s embedded player.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              This means that the underlying video remains hosted and
              delivered by YouTube. When a user watches an embedded YouTube
              video on Whistle, playback is provided through YouTube&apos;s
              technology and remains subject to YouTube&apos;s applicable
              terms, policies, restrictions, and technical availability.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle may direct the embedded player to a particular portion
              of a publicly available video so that a referee can focus on the
              match incident relevant to a training scenario. This does not
              transfer ownership of the underlying video to Whistle.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              4. Educational Context
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Third-party videos are presented within an educational training
              experience. Whistle adds questions, answer choices, referee
              decisions, explanations, scoring, and other educational material
              around the match incident.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The purpose of presenting these incidents is to allow referees
              to analyze situations that can arise during soccer matches and
              practice applying referee principles and the Laws of the Game.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle does not provide the embedded videos as a substitute for
              watching the original video, broadcast, or other source material.
              Users who wish to view the original content should use the
              options provided by the applicable video platform.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              5. Copyright and Ownership
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Copyright and other intellectual property rights in third-party
              content belong to their respective owners. The appearance of
              third-party content on Whistle through an embedded player does
              not mean that Whistle owns that content.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle&apos;s original material — including its website design,
              scenario organization, original written questions, original
              explanations, training structure, and other original site
              content — is separate from the ownership of any underlying
              third-party video.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              6. Rights Holder Concerns
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle respects the rights of video creators, broadcasters,
              leagues, clubs, organizations, and other rights holders.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              If you are a rights holder, or an authorized representative of a
              rights holder, and believe that content referenced or embedded
              through Whistle raises a concern, please contact Whistle with
              enough information to identify the relevant material.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle will review reasonable concerns regarding embedded
              content and may remove or replace a training scenario when
              appropriate.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              7. Video Availability
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Because third-party videos are hosted outside of Whistle,
              Whistle cannot guarantee that a particular video or training
              scenario will remain available.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              A video may become unavailable because it is removed by its
              uploader, restricted by the platform, made private, blocked in a
              particular region, changed, or otherwise made unavailable.
              Whistle may update or remove affected scenarios when this occurs.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              8. Referee Decisions and Explanations
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle is a practice resource. Scenario answers and explanations
              are provided for educational purposes and should not be treated
              as official rulings by FIFA, The IFAB, U.S. Soccer, a state
              referee organization, a competition authority, or any other
              governing body unless explicitly identified as such.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Soccer decisions can depend on factors including the referee&apos;s
              angle, match context, the nature and severity of contact, and
              information that may not be fully visible in a video. Reasonable
              disagreement may therefore exist regarding some match incidents.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Referees should rely on the current Laws of the Game, official
              guidance, and instruction from their applicable referee
              organizations when officiating actual matches.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              9. No Affiliation or Endorsement
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Unless explicitly stated otherwise, Whistle is independent and
              is not affiliated with, endorsed by, sponsored by, or officially
              associated with YouTube, Google, FIFA, The IFAB, U.S. Soccer,
              any professional or amateur league, any club, any broadcaster,
              or any other organization whose material may appear in an
              embedded video.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              References to organizations, competitions, teams, platforms, or
              other third parties are provided only when relevant to the
              educational material or the identification of third-party
              services.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              10. Trademarks
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Third-party names, logos, competition marks, club marks, and
              other trademarks that may appear within embedded videos remain
              the property of their respective owners. Their appearance does
              not imply sponsorship or endorsement of Whistle.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              11. Third-Party Services
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle may link to or interact with third-party websites and
              services. Those services operate under their own terms, privacy
              practices, content policies, and technical systems.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle does not control third-party websites and cannot
              guarantee their continued availability, functionality, accuracy,
              or content.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              12. Nonprofit and Educational Nature
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle is intended to provide free educational practice for
              referees. Access to Whistle&apos;s referee decision-training
              experience is provided without requiring users to purchase the
              underlying third-party videos.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The nonprofit or educational nature of a project does not, by
              itself, determine the legal status of every possible use of
              third-party material. This page therefore describes how Whistle
              operates rather than making a blanket claim regarding ownership
              or legal rights in third-party content.
            </p>
          </section>
{/* VIDEO SOURCE THANK YOU */}
<section>
  <h2 className="text-2xl font-extrabold">
    Thank You to Our Video Sources
  </h2>

  <p className="mt-4 text-gray-700 leading-relaxed">
    Whistle would not be possible without the creators who make soccer
    footage available on YouTube. We sincerely appreciate the channels whose
    videos help make these referee training scenarios possible.
  </p>

  <p className="mt-4 text-gray-700 leading-relaxed">
    Their work gives referees the opportunity to learn from real match
    situations, review difficult decisions, and get more decision-making
    practice away from the field.
  </p>

  <div className="mt-7 space-y-4">

    <a
      href="https://www.youtube.com/@RosalesFilmss"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-gray-200 bg-white p-5 hover:border-green-400 hover:bg-green-50 transition"
    >
      <p className="font-extrabold text-gray-950">
        Rosales Films ↗
      </p>

      <p className="mt-1 text-sm text-gray-600">
        Source for many of the match situations currently used throughout
        Whistle.
      </p>
    </a>

    <div className="block rounded-2xl border border-gray-200 bg-white p-5">
      <p className="font-extrabold text-gray-950">
        Fabio Films
      </p>

      <p className="mt-1 text-sm text-gray-600">
        Source for match situations from the Lakeridge, Jesuit, and Lincoln
        videos used in Whistle.
      </p>
    </div>

  </div>

  <div className="mt-7 rounded-2xl bg-green-50 border border-green-100 p-6">
    <p className="font-bold text-green-800">
      To the creators who make these videos available: thank you.
    </p>

    <p className="mt-2 text-gray-700 leading-relaxed">
      Your work helps make it possible to build a free educational resource
      where referees can see real situations, make their own decisions, and
      learn from each scenario.
    </p>
  </div>

  <p className="mt-6 text-sm text-gray-500 leading-relaxed">
    All embedded videos remain hosted on YouTube and belong to their
    respective creators and rights holders. Inclusion in this acknowledgment
    does not imply that any listed creator or channel sponsors, endorses, or
    is affiliated with Whistle.
  </p>
</section>
          {/* 13 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              13. Changes to This Page
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whistle may update this page as the project develops, as the
              website changes, or as third-party services and policies change.
              The date shown at the top of this page indicates when this
              information was most recently updated.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-2xl font-extrabold">
              14. Contact
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Questions about Whistle, its educational material, or a
              third-party content concern can be sent through the contact
              information provided on the Whistle website.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Rights holders contacting Whistle about a particular video
              should identify the video or scenario involved and describe the
              nature of their concern so that it can be reviewed.
            </p>
          </section>

    
  

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-green-700 font-semibold hover:text-green-800 transition"
          >
            ← Return to Whistle
          </Link>
        </div>
      </div>
    </main>
  );
}