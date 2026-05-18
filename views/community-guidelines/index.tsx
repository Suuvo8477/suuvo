'use client'

import React, { useEffect, useRef, useState } from 'react'
import Typography from '@/components/typography'

type SectionItem =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

type Section = {
  id: string
  number: string
  title: string
  items: SectionItem[]
}

const sections: Section[] = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    items: [
      {
        type: 'p',
        text: 'Suuvo is a creator-first platform built around creativity, entertainment, communication, discovery, LIVE interaction, commerce, and community engagement.'
      },
      {
        type: 'p',
        text: 'These Community Guidelines ("Guidelines") establish the rules, standards, and expectations for behavior and content across the Suuvo platform.'
      },
      { type: 'p', text: 'These Guidelines apply to all users including:' },
      {
        type: 'ul',
        items: ['viewers,', 'creators,', 'LIVE hosts,', 'businesses,', 'sellers,', 'advertisers,', 'agencies,', 'moderators,', 'and all other platform participants.']
      },
      { type: 'p', text: 'By using Suuvo, users agree to follow:' },
      {
        type: 'ul',
        items: ['these Community Guidelines,', 'the Terms & Conditions,', 'Creator Policies,', 'monetization rules,', 'and all applicable laws and regulations.']
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: ['remove content,', 'restrict visibility,', 'disable monetization,', 'suspend LIVE access,', 'suspend accounts,', 'or permanently ban users']
      },
      { type: 'p', text: 'for violations of these Guidelines.' },
      { type: 'p', text: 'Enforcement decisions may involve:' },
      {
        type: 'ul',
        items: ['automated systems,', 'AI moderation,', 'human moderation,', 'safety systems,', 'or platform investigations.']
      }
    ]
  },
  {
    id: 'respectful-behavior',
    number: '02',
    title: 'Respectful Behavior',
    items: [
      { type: 'p', text: 'Users must treat others respectfully.' },
      { type: 'p', text: 'The following behaviors are prohibited:' },
      {
        type: 'ul',
        items: ['bullying,', 'harassment,', 'intimidation,', 'stalking,', 'targeted abuse,', 'threats,', 'humiliation,', 'malicious attacks,', 'or coordinated harassment.']
      },
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['encourage self-harm,', 'encourage violence,', 'exploit emotional distress,', 'or repeatedly target individuals.']
      },
      { type: 'p', text: 'Suuvo may remove:' },
      { type: 'ul', items: ['abusive comments,', 'hateful content,', 'harassment campaigns,', 'or repeated disruptive behavior.'] }
    ]
  },
  {
    id: 'hate-speech',
    number: '03',
    title: 'Hate Speech & Discrimination',
    items: [
      { type: 'p', text: 'Suuvo prohibits hateful or discriminatory content targeting individuals or groups based on:' },
      {
        type: 'ul',
        items: ['race,', 'ethnicity,', 'nationality,', 'religion,', 'gender,', 'gender identity,', 'sexual orientation,', 'disability,', 'age,', 'immigration status,', 'or protected characteristics.']
      },
      { type: 'p', text: 'Prohibited content includes:' },
      {
        type: 'ul',
        items: ['slurs,', 'dehumanizing language,', 'hateful symbols,', 'violent extremist propaganda,', 'discrimination,', 'or calls for exclusion or harm.']
      },
      { type: 'p', text: 'Suuvo may remove:' },
      { type: 'ul', items: ['hateful content,', 'extremist content,', 'or discriminatory conduct.'] }
    ]
  },
  {
    id: 'violence',
    number: '04',
    title: 'Violence & Dangerous Activity',
    items: [
      { type: 'p', text: 'Suuvo prohibits content involving:' },
      {
        type: 'ul',
        items: ['graphic violence,', 'violent threats,', 'murder,', 'torture,', 'criminal violence,', 'terrorism,', 'violent extremism,', 'or dangerous criminal activity.']
      },
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['promote violent acts,', 'glorify violent organizations,', 'encourage criminal activity,', 'or organize harmful conduct.']
      },
      { type: 'p', text: 'Dangerous acts that may result in injury or death may be restricted or removed.' },
      { type: 'p', text: 'Suuvo may place age restrictions or warnings on certain sensitive content where appropriate.' }
    ]
  },
  {
    id: 'self-harm',
    number: '05',
    title: 'Self-Harm & Suicide Content',
    items: [
      { type: 'p', text: 'Suuvo prioritizes user safety and mental health protection.' },
      { type: 'p', text: 'Content that:' },
      {
        type: 'ul',
        items: ['promotes suicide,', 'promotes self-harm,', 'encourages eating disorders,', 'or encourages dangerous behavior']
      },
      { type: 'p', text: 'is prohibited.' },
      { type: 'p', text: 'Suuvo may:' },
      {
        type: 'ul',
        items: ['remove harmful content,', 'provide safety resources,', 'restrict visibility,', 'or intervene through safety systems.']
      },
      { type: 'p', text: 'Sensitive discussions related to recovery, awareness, or education may be permitted where appropriate.' }
    ]
  },
  {
    id: 'child-safety',
    number: '06',
    title: 'Child Safety & Minor Protection',
    items: [
      { type: 'p', text: 'Suuvo maintains strict protections for minors.' },
      { type: 'p', text: 'The following are strictly prohibited:' },
      {
        type: 'ul',
        items: ['child sexual exploitation,', 'grooming,', 'inappropriate adult-minor interactions,', 'sexualization of minors,', 'exploitative content involving minors,', 'or any form of abuse involving minors.']
      },
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['solicit inappropriate interactions with minors,', 'attempt to exploit minors,', 'or use the platform to endanger children.']
      },
      { type: 'p', text: 'Suuvo may:' },
      {
        type: 'ul',
        items: ['remove violating content,', 'report illegal activity to authorities,', 'permanently ban accounts,', 'restrict communication features,', 'or implement emergency safety measures.']
      },
      { type: 'p', text: 'Additional protections may apply to:' },
      { type: 'ul', items: ['youth accounts,', 'LIVE participation,', 'messaging systems,', 'and monetization systems involving minors.'] }
    ]
  },
  {
    id: 'sexual-content',
    number: '07',
    title: 'Sexual Content & Nudity',
    items: [
      { type: 'p', text: 'Suuvo restricts sexually explicit or exploitative content.' },
      { type: 'p', text: 'Prohibited content may include:' },
      {
        type: 'ul',
        items: ['explicit sexual activity,', 'sexual exploitation,', 'non-consensual intimate content,', 'trafficking-related content,', 'or exploitative nudity.']
      },
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['share revenge pornography,', 'sexually exploit others,', 'or distribute intimate content without consent.']
      },
      { type: 'p', text: 'Certain limited mature content may be restricted, age-gated, or moderated depending on:' },
      { type: 'ul', items: ['region,', 'age,', 'platform rules,', 'and legal requirements.'] },
      { type: 'p', text: 'Content involving minors in sexual contexts is strictly prohibited.' }
    ]
  },
  {
    id: 'harassment-threats',
    number: '08',
    title: 'Harassment, Threats & Abuse',
    items: [
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['threaten violence,', 'blackmail others,', 'dox users,', 'expose personal information,', 'intimidate creators,', 'encourage targeted attacks,', 'or engage in coordinated abuse.']
      },
      { type: 'p', text: 'Suuvo may restrict:' },
      { type: 'ul', items: ['comments,', 'messaging,', 'LIVE participation,', 'or account functionality'] },
      { type: 'p', text: 'to protect user safety.' }
    ]
  },
  {
    id: 'spam-scams',
    number: '09',
    title: 'Spam, Scams & Fraud',
    items: [
      { type: 'p', text: 'Suuvo prohibits:' },
      {
        type: 'ul',
        items: ['scams,', 'phishing,', 'fake giveaways,', 'pyramid schemes,', 'deceptive promotions,', 'impersonation,', 'fake engagement,', 'or fraudulent monetization behavior.']
      },
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['artificially inflate followers,', 'inflate gifts,', 'inflate views,', 'manipulate recommendations,', 'or manipulate monetization systems.']
      },
      { type: 'p', text: 'Suuvo may:' },
      { type: 'ul', items: ['reverse rewards,', 'disable monetization,', 'suspend accounts,', 'or investigate suspicious behavior.'] }
    ]
  },
  {
    id: 'misinformation',
    number: '10',
    title: 'Misinformation & Manipulative Content',
    items: [
      { type: 'p', text: 'Suuvo may restrict or remove:' },
      {
        type: 'ul',
        items: ['harmful misinformation,', 'manipulated media,', 'dangerous false claims,', 'coordinated disinformation,', 'or deceptive content likely to cause harm.']
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      { type: 'ul', items: ['reduce visibility,', 'apply warnings,', 'limit distribution,', 'or remove harmful misinformation.'] }
    ]
  },
  {
    id: 'impersonation',
    number: '11',
    title: 'Impersonation & Identity Misuse',
    items: [
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['impersonate individuals,', 'impersonate businesses,', 'impersonate creators,', 'falsely represent affiliations,', 'or mislead users regarding identity.']
      },
      { type: 'p', text: 'Parody, satire, or fan accounts may be permitted where clearly disclosed and not deceptive.' }
    ]
  },
  {
    id: 'privacy',
    number: '12',
    title: 'Privacy & Personal Information',
    items: [
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['publish private information,', 'expose personal addresses,', 'share financial information,', 'share government IDs,', 'leak confidential information,', 'or violate privacy rights.']
      },
      { type: 'p', text: 'Suuvo may remove:' },
      { type: 'ul', items: ['doxxing content,', 'unauthorized disclosures,', 'or privacy-violating materials.'] }
    ]
  },
  {
    id: 'intellectual-property',
    number: '13',
    title: 'Intellectual Property',
    items: [
      { type: 'p', text: 'Users may only upload content they:' },
      { type: 'ul', items: ['own,', 'created,', 'or are authorized to use.'] },
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['upload copyrighted content without authorization,', 'misuse trademarks,', 'distribute pirated content,', 'or violate intellectual property rights.']
      },
      { type: 'p', text: 'Suuvo may:' },
      { type: 'ul', items: ['remove infringing content,', 'disable repeat offenders,', 'or restrict accounts.'] }
    ]
  },
  {
    id: 'platform-manipulation',
    number: '14',
    title: 'Platform Manipulation',
    items: [
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['manipulate recommendations,', 'manipulate trends,', 'manipulate discovery systems,', 'manipulate rankings,', 'abuse automation,', 'exploit platform vulnerabilities,', 'scrape platform data,', 'or interfere with platform operations.']
      },
      { type: 'p', text: 'Unauthorized automation, scraping, or exploitation may result in:' },
      { type: 'ul', items: ['account suspension,', 'legal action,', 'or permanent bans.'] }
    ]
  },
  {
    id: 'live-rules',
    number: '15',
    title: 'Live Rules',
    items: [
      { type: 'p', text: 'Users participating in LIVE systems must comply with:' },
      { type: 'ul', items: ['safety standards,', 'moderation requirements,', 'monetization rules,', 'and platform conduct rules.'] },
      { type: 'p', text: 'LIVE hosts may not:' },
      {
        type: 'ul',
        items: ['engage in dangerous acts,', 'exploit viewers,', 'conduct scams,', 'manipulate gifts,', 'encourage harassment,', 'or violate platform rules.']
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: ['mute LIVE sessions,', 'restrict LIVE participation,', 'remove LIVE streams,', 'disable LIVE monetization,', 'or terminate LIVE access.']
      }
    ]
  },
  {
    id: 'pk-battles',
    number: '16',
    title: 'PK Battles & Interactive Competitions',
    items: [
      { type: 'p', text: 'PK battles and interactive competition systems must remain:' },
      { type: 'ul', items: ['fair,', 'safe,', 'and compliant with platform rules.'] },
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: ['manipulate PK systems,', 'coordinate fraudulent gifting,', 'exploit ranking systems,', 'or abuse competition mechanics.']
      },
      { type: 'p', text: 'PK battles do not constitute:' },
      { type: 'ul', items: ['gambling,', 'financial investments,', 'or guaranteed rewards systems.'] },
      { type: 'p', text: 'Suuvo may:' },
      { type: 'ul', items: ['investigate suspicious activity,', 'reverse rewards,', 'or restrict participation.'] }
    ]
  },
  {
    id: 'shops-commerce',
    number: '17',
    title: 'Shops & Commerce Rules',
    items: [
      { type: 'p', text: 'Users may not sell:' },
      {
        type: 'ul',
        items: ['illegal products,', 'counterfeit products,', 'stolen goods,', 'dangerous products,', 'prohibited substances,', 'or unlawful services.']
      },
      { type: 'p', text: 'Sellers are responsible for:' },
      { type: 'ul', items: ['compliance with laws,', 'product legality,', 'fulfillment,', 'taxes,', 'and customer obligations.'] },
      { type: 'p', text: 'Suuvo may:' },
      { type: 'ul', items: ['remove listings,', 'restrict storefronts,', 'suspend sellers,', 'or investigate commerce abuse.'] }
    ]
  },
  {
    id: 'advertising',
    number: '18',
    title: 'Advertising & Sponsored Content',
    items: [
      { type: 'p', text: 'Creators and businesses must:' },
      {
        type: 'ul',
        items: ['disclose paid partnerships,', 'comply with advertising laws,', 'avoid deceptive marketing,', 'and follow platform sponsorship rules.']
      },
      { type: 'p', text: 'False advertising or misleading promotions may result in:' },
      { type: 'ul', items: ['content removal,', 'demonetization,', 'or account suspension.'] }
    ]
  },
  {
    id: 'ai-moderation',
    number: '19',
    title: 'AI & Automated Moderation',
    items: [
      { type: 'p', text: 'Suuvo may use:' },
      {
        type: 'ul',
        items: ['AI systems,', 'automated moderation systems,', 'fraud detection systems,', 'recommendation systems,', 'and human moderation']
      },
      { type: 'p', text: 'to enforce these Guidelines.' },
      { type: 'p', text: 'Automated systems may:' },
      { type: 'ul', items: ['flag content,', 'reduce visibility,', 'restrict monetization,', 'or trigger moderation review.'] },
      { type: 'p', text: 'AI systems may not always be accurate.' },
      { type: 'p', text: 'Users may have access to appeals processes where applicable.' }
    ]
  },
  {
    id: 'enforcement',
    number: '20',
    title: 'Enforcement Actions',
    items: [
      { type: 'p', text: 'Violations of these Guidelines may result in:' },
      {
        type: 'ul',
        items: ['warnings,', 'content removal,', 'reduced visibility,', 'demonetization,', 'LIVE restrictions,', 'messaging restrictions,', 'temporary suspension,', 'permanent suspension,', 'device restrictions,', 'or permanent bans.']
      },
      { type: 'p', text: 'Suuvo reserves the right to determine:' },
      { type: 'ul', items: ['severity,', 'enforcement level,', 'visibility restrictions,', 'and repeat offender treatment.'] },
      { type: 'p', text: 'Serious violations may result in immediate permanent removal.' }
    ]
  },
  {
    id: 'reporting-appeals',
    number: '21',
    title: 'Reporting & Appeals',
    items: [
      { type: 'p', text: 'Users may report:' },
      {
        type: 'ul',
        items: ['harmful content,', 'abusive behavior,', 'fraud,', 'impersonation,', 'copyright violations,', 'or safety concerns.']
      },
      { type: 'p', text: 'Suuvo may provide appeals processes for certain moderation actions.' },
      { type: 'p', text: 'Submitting false or abusive reports may itself violate these Guidelines.' }
    ]
  },
  {
    id: 'law-enforcement',
    number: '22',
    title: 'Law Enforcement & Safety Cooperation',
    items: [
      { type: 'p', text: 'Suuvo may cooperate with:' },
      { type: 'ul', items: ['law enforcement,', 'regulators,', 'child safety organizations,', 'or legal authorities'] },
      { type: 'p', text: 'where required by law or necessary to protect safety.' }
    ]
  },
  {
    id: 'changes',
    number: '23',
    title: 'Changes to Community Guidelines',
    items: [
      { type: 'p', text: 'Suuvo may modify these Community Guidelines at any time.' },
      { type: 'p', text: 'Continued use of the platform following updates constitutes acceptance of revised Guidelines.' }
    ]
  },
  {
    id: 'contact-information',
    number: '24',
    title: 'Contact Information',
    items: [
      { type: 'p', text: 'SUUVO, INC.\n1201 N Market Street, Suite 111\nWilmington, DE 19801\nUnited States' },
      { type: 'p', text: 'Legal Contact Email: Legal@suuvo.com' },
      { type: 'p', text: 'Support Contact Email: Support@Suuvo.com' }
    ]
  },
  {
    id: 'acknowledgment',
    number: '25',
    title: 'Final Acknowledgment',
    items: [
      { type: 'p', text: 'By using Suuvo, users acknowledge that:' },
      {
        type: 'ul',
        items: [
          'platform participation is conditional,',
          'moderation and enforcement may occur,',
          'AI and automated systems may assist moderation,',
          'visibility and monetization may be restricted,',
          'and continued use requires compliance with all platform rules, policies, and applicable laws.'
        ]
      }
    ]
  }
]

function SectionCard({ section }: { section: Section }) {
  const isContact = section.id === 'contact-information'

  return (
    <div
      id={section.id}
      className={`scroll-mt-32 rounded-2xl lg:rounded-3xl p-6 md:p-8 transition-all duration-300 ${
        isContact
          ? 'bg-[linear-gradient(135deg,#EF9F22_0%,#DE127B_100%)] text-white'
          : 'bg-white shadow-[1px_6px_13px_0px_#0000000A,4px_23px_23px_0px_#00000008,9px_52px_32px_0px_#00000005,17px_92px_38px_0px_#00000003]'
      }`}
    >
      <div className='flex items-start gap-4 mb-5'>
        <span
          className={`shrink-0 inline-flex items-center justify-center text-[11px] font-bold tracking-widest rounded-full w-10 h-10 ${
            isContact
              ? 'bg-white/20 text-white'
              : 'bg-[linear-gradient(135deg,#EF9F22_0%,#DE127B_100%)] text-white'
          }`}
        >
          {section.number}
        </span>
        <h2
          className={`text-[18px] md:text-[20px] font-semibold tracking-[-0.03em] leading-tight pt-1.5 ${
            isContact ? 'text-white' : 'text-[#1E1E1E]'
          }`}
        >
          {section.title.toUpperCase()}
        </h2>
      </div>

      <div
        className={`ml-14 space-y-3 text-[14px] md:text-[15px] leading-7 font-medium tracking-[-0.02em] ${
          isContact ? 'text-white/90' : 'text-[#1E1E1E]/70'
        }`}
      >
        {section.items.map((item, i) => {
          if (item.type === 'ul') {
            return (
              <ul key={i} className='space-y-1.5 pl-4'>
                {item.items.map((li, j) => (
                  <li key={j} className='flex items-start gap-2'>
                    <span
                      className={`mt-2.5 shrink-0 w-1 h-1 rounded-full ${isContact ? 'bg-white/70' : 'bg-[#DE127B]'}`}
                    />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )
          }

          if (isContact && item.text.includes('@suuvo.com')) {
            const isLegal = item.text.startsWith('Legal')
            const email = isLegal ? 'Legal@suuvo.com' : 'Support@Suuvo.com'
            const label = isLegal ? 'Legal Contact Email' : 'Support Contact Email'
            return (
              <p key={i}>
                <span>{label}: </span>
                <a
                  href={`mailto:${email}`}
                  className='underline underline-offset-2 hover:opacity-80 transition-opacity'
                >
                  {email}
                </a>
              </p>
            )
          }

          if (item.text.includes('\n')) {
            return (
              <p key={i} className='whitespace-pre-line'>
                {item.text}
              </p>
            )
          }

          return <p key={i}>{item.text}</p>
        })}
      </div>
    </div>
  )
}

export default function CommunityGuidelinesView() {
  const [activeId, setActiveId] = useState<string>(sections[0].id)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const tocRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sectionEls = sections
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]

    observerRef.current = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          )
          setActiveId(topmost.target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    sectionEls.forEach(el => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  useEffect(() => {
    if (!tocRef.current) return
    const activeEl = tocRef.current.querySelector(
      `[data-id="${activeId}"]`
    ) as HTMLElement | null
    activeEl?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [activeId])

  return (
    <div className='min-h-screen bg-[#fafafa]'>
      {/* Hero Banner */}
      <div className='bg-[linear-gradient(135deg,#70b4ff_0%,#1f88ff_50%,#DE127B_100%)] relative overflow-hidden'>
        <div className='absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none' />
        <div className='absolute top-10 left-1/3 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none' />
        <div className='absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none' />

        <div className='s-container pt-20 pb-16 md:pt-28 md:pb-20 relative z-10'>
          <p className='text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase mb-3'>
            Suuvo, Inc.
          </p>
          <Typography variant='h2' className='text-white leading-tight! max-w-2xl'>
            Community Guidelines
          </Typography>
          <p className='mt-4 text-[15px] md:text-[16px] font-medium leading-6 tracking-[-0.02em] text-white/70 max-w-xl'>
            Rules, standards, and expectations for behavior and content across the Suuvo platform.
          </p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <span className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-[13px] font-medium tracking-[-0.01em]'>
              <span className='w-1.5 h-1.5 rounded-full bg-white/60 shrink-0' />
              Effective: May 25, 2025
            </span>
            <span className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-[13px] font-medium tracking-[-0.01em]'>
              <span className='w-1.5 h-1.5 rounded-full bg-white/60 shrink-0' />
              Last Updated: May 10, 2026
            </span>
          </div>

          {/* Quick-stat chips */}
          <div className='mt-8 flex flex-wrap gap-3'>
            {[
              '25 Sections',
              'Applies to All Users',
              'AI-Assisted Moderation',
            ].map(label => (
              <span
                key={label}
                className='inline-flex items-center bg-white/10 border border-white/15 rounded-lg px-3 py-1 text-white/80 text-[12px] font-semibold tracking-[0.03em]'
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='s-container py-12 md:py-16'>
        <div className='flex gap-8 xl:gap-12 items-start'>

          {/* Sticky Sidebar TOC */}
          <aside className='hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28'>
            <div className='bg-white rounded-2xl shadow-[1px_6px_13px_0px_#0000000A,4px_23px_23px_0px_#00000008] overflow-hidden'>
              <div className='px-5 py-4 border-b border-black/5'>
                <p className='text-[11px] font-bold tracking-[0.15em] uppercase text-[#1E1E1E]/40'>
                  Table of Contents
                </p>
              </div>
              <nav
                ref={tocRef}
                className='p-3 max-h-[calc(100vh-12rem)] overflow-y-auto'
              >
                {sections.map(section => {
                  const isActive = activeId === section.id
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      data-id={section.id}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium tracking-[-0.01em] transition-all duration-200 group ${
                        isActive
                          ? 'bg-[linear-gradient(135deg,#70b4ff_0%,#1f88ff_50%,#DE127B_100%)] text-white'
                          : 'text-[#1E1E1E]/60 hover:text-[#1E1E1E] hover:bg-black/5'
                      }`}
                    >
                      <span
                        className={`shrink-0 text-[10px] font-bold w-6 text-center ${
                          isActive
                            ? 'text-white/70'
                            : 'text-[#1E1E1E]/30 group-hover:text-[#1E1E1E]/50'
                        }`}
                      >
                        {section.number}
                      </span>
                      <span className='leading-tight'>{section.title}</span>
                    </a>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className='flex-1 min-w-0 space-y-5'>
            {sections.map(section => (
              <SectionCard key={section.id} section={section} />
            ))}

            <p className='text-center text-[13px] text-[#1E1E1E]/40 font-medium tracking-[-0.01em] pt-4'>
              &copy; {new Date().getFullYear()} Suuvo, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
