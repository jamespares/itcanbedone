import { AlertTriangle } from 'lucide-react'

export default function TestimonialSection() {
  return (
    <div className="bg-base-200 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-base-content">Testimonials</h2>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-error shrink-0" />
              <h3 className="text-3xl font-bold text-base-content">A Civil Servant's Story</h3>
            </div>

            <div className="space-y-4 text-base-content">
              <p>
                "I haven't told this story before but given the way in which the government is
                behaving, I feel compelled to do so. Last year, I was, essentially, forced out of
                the Civil Service. Up until July of 2024, I was a Civil Servant in the Home Office,
                where I had spent the previous 4 years working in the field of Public Inquiries
                (which is why I feel so strongly about the Labour government&apos;s refusal to order
                an Inquiry into the gang-rape scandal plaguing our country). Many reading will know
                that I have been a strong advocate against sterilising and mutilating children in
                the name of gender ideology. However, I always kept my work life and personal life
                completely separate, in order to ensure that I could carry out my work as a Civil
                Servant with integrity and neutrality. I never discussed my advocacy at work. I
                never mentioned my Civil Service role in my personal advocacy and campaigning. I had
                even specifically sought guidance from the Cabinet Office as to whether anything in
                Civil Service policy prohibited my advocacy - no response in the affirmative ever
                came. This is in contrast to many of my colleagues, who bring their activism into
                the workplace. My line manager, for example, had pronouns in her email signature,
                along with a rainbow flag and allyship slogan. However, when the Inquiry I had been
                on secondment to concluded, I noticed strange things happening. I was told that my
                previous role no longer existed. Promises to move me to another Inquiry were reneged
                upon. I was given work to do, only for it to disappear into a vacuum, never to be
                seen again. I was subsequently told I was at risk of redundancy. This was confusing
                and unsettling, as the Inquiry I led had performed extremely well (finishing on time
                and under budget, which is rare for Public Inquiries). Then, a few days before
                Christmas 2023, I was told, with no prior indication, that there would be a formal
                investigation into a few posts I made on X back in July 2023. The posts in question
                related to me raising concerns about members of the Labour Party and their
                fanaticism when it came to gender ideology and the risks to child safeguarding as a
                result. For example, Keir Starmer saying that women could have a penis and Labour
                supporting self-ID for men who claim they are women. I spent the next 6 months being
                dragged through an investigation. During the investigation, after putting in a
                Subject Access Request for my personal data, I discovered, to my horror, how the
                investigation had come about. The office of the Permanent Secretary had instructed
                the Professional Standards Unit to go digging into the private social media accounts
                of certain members of staff, including mine. Colleagues were tasked with snooping
                through my X account. This was a fishing expedition. At this point, it was
                increasingly looking like a Labour government would be formed following the next
                General Election. It became clear to me that the Home Office were trying to shut
                down employees who could be seen as a problem for Labour. Tellingly, during one of
                my hearings, the investigator asked me something along the lines of: If we get a
                Labour Home Secretary soon, how do you think they will feel reading your posts on X?
                Do you not think they might be offended? Even then, the establishment were gleefully
                gearing up for Labour. At the end of the investigation, I was warned that if I
                continued with my personal advocacy around child safeguarding that I would be
                charged with gross misconduct and could lose my job. This was not something I could
                afford. I jumped before I was pushed and agreed to a voluntary redundancy. I wish I
                could say I was the only Civil Servant shut down for having the wrong opinions. Make
                no mistake, it is a relief to now be free of it altogether. However, what this
                experience taught me is that we have an activist and ideologically minded Civil
                Service, enthralled to Labour, content to undermine free speech at every turn. This
                should worry us all."
              </p>

              <div className="divider"></div>

              <div className="text-base-content/80">
                <p>Example Testimonial</p>
                <p>Former Home Office Civil Servant</p>
                <p>Public Inquiries Division</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
