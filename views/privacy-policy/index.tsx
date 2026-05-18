'use client'

import React, { useEffect, useRef, useState } from 'react'
import Typography from '@/components/typography'

type SectionItem =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'h'; text: string }

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
        text: 'Suuvo, Inc. ("Suuvo," "Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal information.'
      },
      {
        type: 'p',
        text: 'This Privacy Policy explains how Suuvo collects, uses, stores, processes, transfers, shares, and protects information when you access or use:'
      },
      {
        type: 'ul',
        items: [
          'the Suuvo website,',
          'mobile applications,',
          'creator systems,',
          'monetization systems,',
          'LIVE systems,',
          'commerce systems,',
          'messaging systems,',
          'AI-powered systems,',
          'recommendation systems,',
          'and all related products, services, tools, features, and technologies operated by Suuvo.'
        ]
      },
      { type: 'p', text: 'This Privacy Policy applies to all users of the platform including:' },
      {
        type: 'ul',
        items: ['viewers,', 'creators,', 'businesses,', 'sellers,', 'advertisers,', 'agencies,', 'moderators,', 'and other users or participants.']
      },
      {
        type: 'p',
        text: 'By accessing or using Suuvo, you acknowledge that your information may be collected, processed, stored, and shared as described in this Privacy Policy.'
      },
      { type: 'p', text: 'If you do not agree with this Privacy Policy, you should not use the platform.' }
    ]
  },
  {
    id: 'information-we-collect',
    number: '02',
    title: 'Information We Collect',
    items: [
      {
        type: 'p',
        text: 'Suuvo may collect information directly from users, automatically through platform usage, from connected devices, from payment providers, from third-party integrations, and from platform operations.'
      },
      { type: 'h', text: '2.1 Account Information' },
      { type: 'p', text: 'When users create accounts, Suuvo may collect:' },
      {
        type: 'ul',
        items: [
          'full name,',
          'display name,',
          'username,',
          'email address,',
          'phone number,',
          'password credentials,',
          'date of birth,',
          'profile image,',
          'biography information,',
          'gender information where provided,',
          'country or region,',
          'language preferences,',
          'and account settings.'
        ]
      },
      { type: 'h', text: '2.2 User Content' },
      { type: 'p', text: 'Suuvo may collect content uploaded or shared on the platform including:' },
      {
        type: 'ul',
        items: [
          'videos,',
          'images,',
          'LIVE streams,',
          'comments,',
          'captions,',
          'messages,',
          'reactions,',
          'audio recordings,',
          'product listings,',
          'creator content,',
          'metadata associated with uploads,',
          'and other materials shared through platform features.'
        ]
      },
      { type: 'p', text: 'This may include:' },
      {
        type: 'ul',
        items: ['timestamps,', 'engagement information,', 'editing information,', 'upload history,', 'or moderation history.']
      },
      { type: 'h', text: '2.3 Communications' },
      { type: 'p', text: 'Suuvo may collect information related to communications including:' },
      {
        type: 'ul',
        items: [
          'direct messages,',
          'support tickets,',
          'appeals,',
          'reports,',
          'customer service communications,',
          'survey responses,',
          'and platform feedback.'
        ]
      },
      { type: 'p', text: 'Where legally permitted, communications may be reviewed:' },
      {
        type: 'ul',
        items: ['for safety,', 'moderation,', 'fraud prevention,', 'abuse prevention,', 'or platform operations.']
      },
      { type: 'h', text: '2.4 Device Information' },
      { type: 'p', text: 'Suuvo may automatically collect device and technical information including:' },
      {
        type: 'ul',
        items: [
          'IP address,',
          'device identifiers,',
          'browser type,',
          'operating system,',
          'device model,',
          'mobile carrier,',
          'network information,',
          'app version,',
          'language settings,',
          'screen resolution,',
          'system activity,',
          'crash reports,',
          'diagnostics,',
          'and performance information.'
        ]
      },
      { type: 'h', text: '2.5 Usage Information' },
      { type: 'p', text: 'Suuvo may collect information regarding how users interact with the platform including:' },
      {
        type: 'ul',
        items: [
          'watch history,',
          'search activity,',
          'likes,',
          'shares,',
          'saves,',
          'follows,',
          'comments,',
          'purchases,',
          'clicks,',
          'engagement patterns,',
          'LIVE participation,',
          'viewing duration,',
          'content interactions,',
          'monetization interactions,',
          'and feature usage.'
        ]
      },
      { type: 'h', text: '2.6 Location Information' },
      { type: 'p', text: 'Suuvo may collect location-related information including:' },
      {
        type: 'ul',
        items: [
          'approximate location derived from IP address,',
          'device-based location where permissions are granted,',
          'regional settings,',
          'and geographic usage information.'
        ]
      },
      { type: 'p', text: 'Location information may be used for:' },
      {
        type: 'ul',
        items: ['content localization,', 'recommendations,', 'fraud prevention,', 'compliance,', 'safety,', 'and regional feature management.']
      },
      { type: 'h', text: '2.7 Payment & Transaction Information' },
      { type: 'p', text: 'Suuvo may collect information related to:' },
      {
        type: 'ul',
        items: [
          'subscriptions,',
          'gifts,',
          'virtual item purchases,',
          'Shops purchases,',
          'payouts,',
          'creator earnings,',
          'billing activity,',
          'and payment transactions.'
        ]
      },
      { type: 'p', text: 'Payment processing may be handled by third-party providers.' },
      { type: 'p', text: 'Suuvo may receive limited transaction-related information including:' },
      {
        type: 'ul',
        items: ['transaction identifiers,', 'payment status,', 'billing metadata,', 'refund information,', 'and fraud indicators.']
      },
      { type: 'p', text: 'Suuvo does not store complete payment card information unless explicitly stated.' },
      { type: 'h', text: '2.8 Creator & Business Information' },
      { type: 'p', text: 'Suuvo may collect additional information from creators, sellers, and businesses including:' },
      {
        type: 'ul',
        items: [
          'business details,',
          'tax documentation,',
          'payout information,',
          'verification documents,',
          'storefront information,',
          'sponsorship information,',
          'and monetization eligibility information.'
        ]
      },
      { type: 'h', text: '2.9 AI & Automated System Data' },
      { type: 'p', text: 'Suuvo may collect and process information using AI and automated systems for:' },
      {
        type: 'ul',
        items: [
          'moderation,',
          'recommendations,',
          'ranking,',
          'fraud detection,',
          'abuse detection,',
          'accessibility,',
          'creator assistance,',
          'enhancement tools,',
          'analytics,',
          'and operational systems.'
        ]
      },
      { type: 'p', text: 'AI systems may analyze:' },
      {
        type: 'ul',
        items: ['uploaded content,', 'behavioral patterns,', 'engagement activity,', 'metadata,', 'and interactions with platform systems.']
      },
      { type: 'h', text: '2.10 Cookies & Tracking Technologies' },
      { type: 'p', text: 'Suuvo may use:' },
      {
        type: 'ul',
        items: [
          'cookies,',
          'SDKs,',
          'pixels,',
          'local storage,',
          'analytics technologies,',
          'session tracking,',
          'and similar technologies.'
        ]
      },
      { type: 'p', text: 'These technologies may be used for:' },
      {
        type: 'ul',
        items: ['authentication,', 'personalization,', 'analytics,', 'fraud prevention,', 'remembering preferences,', 'recommendations,', 'and platform operations.']
      },
      { type: 'p', text: 'Users may adjust certain cookie settings through browser or device settings where available.' }
    ]
  },
  {
    id: 'how-we-use-information',
    number: '03',
    title: 'How Suuvo Uses Information',
    items: [
      { type: 'p', text: 'Suuvo may use collected information for platform operations and legitimate business purposes including:' },
      {
        type: 'ul',
        items: [
          'operating and maintaining the platform,',
          'account management,',
          'content distribution,',
          'recommendations,',
          'personalization,',
          'moderation,',
          'fraud prevention,',
          'abuse prevention,',
          'safety enforcement,',
          'analytics,',
          'troubleshooting,',
          'customer support,',
          'monetization systems,',
          'payouts,',
          'subscriptions,',
          'Shops operations,',
          'advertising systems,',
          'feature development,',
          'accessibility,',
          'compliance with legal obligations,',
          'and platform improvements.'
        ]
      },
      { type: 'p', text: 'Suuvo may use information to:' },
      {
        type: 'ul',
        items: [
          'detect harmful behavior,',
          'enforce platform rules,',
          'investigate suspicious activity,',
          'prevent scams,',
          'protect minors,',
          'and improve safety systems.'
        ]
      }
    ]
  },
  {
    id: 'recommendation-systems',
    number: '04',
    title: 'Recommendation & Discovery Systems',
    items: [
      { type: 'p', text: 'Suuvo may use information to personalize:' },
      {
        type: 'ul',
        items: [
          'feeds,',
          'recommendations,',
          'LIVE discovery,',
          'search results,',
          'creator suggestions,',
          'content ranking,',
          'commerce suggestions,',
          'and engagement experiences.'
        ]
      },
      { type: 'p', text: 'Recommendation systems may consider:' },
      {
        type: 'ul',
        items: ['engagement history,', 'watch behavior,', 'interactions,', 'regional activity,', 'preferences,', 'and platform behavior patterns.']
      },
      { type: 'p', text: 'Recommendation and discovery systems may use automated processing and AI systems.' }
    ]
  },
  {
    id: 'ai-automated-processing',
    number: '05',
    title: 'AI & Automated Processing',
    items: [
      { type: 'p', text: 'Suuvo may use AI and automated systems for:' },
      {
        type: 'ul',
        items: [
          'moderation,',
          'ranking,',
          'search,',
          'fraud prevention,',
          'accessibility,',
          'creator assistance,',
          'enhancement tools,',
          'analytics,',
          'and operational systems.'
        ]
      },
      { type: 'p', text: 'Automated systems may:' },
      {
        type: 'ul',
        items: [
          'review content,',
          'flag content,',
          'reduce visibility,',
          'detect abuse,',
          'identify spam,',
          'restrict monetization,',
          'or prioritize content.'
        ]
      },
      { type: 'p', text: 'AI systems may not always be accurate.' },
      { type: 'p', text: 'Suuvo may combine:' },
      { type: 'ul', items: ['AI systems,', 'automated systems,', 'human review,', 'and manual enforcement.'] },
      { type: 'p', text: 'Suuvo reserves the right to improve and evolve AI systems over time.' }
    ]
  },
  {
    id: 'how-information-is-shared',
    number: '06',
    title: 'How Information Is Shared',
    items: [
      { type: 'p', text: 'Suuvo may share information with:' },
      {
        type: 'ul',
        items: [
          'payment providers,',
          'cloud providers,',
          'analytics vendors,',
          'infrastructure providers,',
          'moderation vendors,',
          'legal authorities,',
          'service providers,',
          'and affiliated entities.'
        ]
      },
      { type: 'p', text: 'Information may also be shared:' },
      {
        type: 'ul',
        items: ['during business transactions,', 'mergers,', 'acquisitions,', 'financing events,', 'or corporate restructuring.']
      },
      { type: 'p', text: 'Suuvo may share information where necessary:' },
      {
        type: 'ul',
        items: [
          'to comply with laws,',
          'protect rights,',
          'enforce policies,',
          'prevent harm,',
          'investigate fraud,',
          'or respond to lawful requests.'
        ]
      },
      { type: 'p', text: 'Suuvo does not sell personal user data.' }
    ]
  },
  {
    id: 'public-information',
    number: '07',
    title: 'Public Information',
    items: [
      { type: 'p', text: 'Certain information may be publicly visible including:' },
      {
        type: 'ul',
        items: [
          'usernames,',
          'profile images,',
          'public content,',
          'public comments,',
          'creator statistics,',
          'storefront information,',
          'LIVE participation,',
          'and engagement activity.'
        ]
      },
      { type: 'p', text: 'Users are responsible for information they choose to make public.' }
    ]
  },
  {
    id: 'data-retention',
    number: '08',
    title: 'Data Retention',
    items: [
      { type: 'p', text: 'Suuvo may retain information for as long as necessary to:' },
      {
        type: 'ul',
        items: [
          'operate the platform,',
          'comply with legal obligations,',
          'resolve disputes,',
          'enforce policies,',
          'prevent fraud,',
          'protect safety,',
          'and maintain operational records.'
        ]
      },
      { type: 'p', text: 'Deleted content or accounts may persist temporarily:' },
      {
        type: 'ul',
        items: [
          'in backups,',
          'logs,',
          'cached systems,',
          'moderation records,',
          'fraud prevention systems,',
          'or legal compliance systems.'
        ]
      },
      { type: 'p', text: 'Retention periods may vary depending on:' },
      { type: 'ul', items: ['legal requirements,', 'safety requirements,', 'operational needs,', 'and platform policies.'] }
    ]
  },
  {
    id: 'security',
    number: '09',
    title: 'Security',
    items: [
      {
        type: 'p',
        text: 'Suuvo uses reasonable administrative, technical, and organizational measures designed to protect information.'
      },
      { type: 'p', text: 'Security measures may include:' },
      {
        type: 'ul',
        items: [
          'encryption,',
          'access controls,',
          'authentication systems,',
          'monitoring systems,',
          'fraud prevention systems,',
          'infrastructure protections,',
          'and operational safeguards.'
        ]
      },
      { type: 'p', text: 'However, no system can guarantee absolute security.' },
      { type: 'p', text: 'Users are responsible for maintaining the security of:' },
      { type: 'ul', items: ['passwords,', 'devices,', 'and account credentials.'] }
    ]
  },
  {
    id: 'children-minor-safety',
    number: '10',
    title: 'Children & Minor Safety',
    items: [
      { type: 'p', text: 'Suuvo is committed to protecting minors and maintaining youth safety.' },
      { type: 'p', text: 'Suuvo may implement:' },
      {
        type: 'ul',
        items: [
          'age restrictions,',
          'communication protections,',
          'moderation systems,',
          'safety interventions,',
          'age-gated experiences,',
          'monetization limitations,',
          'and protective systems for minors.'
        ]
      },
      { type: 'p', text: 'Suuvo may remove or restrict accounts that violate youth safety policies.' },
      {
        type: 'p',
        text: 'Parents or legal guardians may contact Suuvo regarding concerns involving minors where legally permitted.'
      }
    ]
  },
  {
    id: 'international-users',
    number: '11',
    title: 'International Users',
    items: [
      { type: 'p', text: 'Suuvo operates globally.' },
      { type: 'p', text: 'Information may be processed, stored, or transferred in:' },
      { type: 'ul', items: ['the United States,', 'or other jurisdictions where Suuvo or its service providers operate.'] },
      { type: 'p', text: 'By using the platform, users acknowledge that information may be transferred internationally.' },
      { type: 'p', text: 'Suuvo may implement safeguards intended to support compliance with applicable privacy laws.' }
    ]
  },
  {
    id: 'user-rights',
    number: '12',
    title: 'User Rights',
    items: [
      { type: 'p', text: 'Depending on jurisdiction, users may have rights including:' },
      {
        type: 'ul',
        items: [
          'access rights,',
          'correction rights,',
          'deletion rights,',
          'restriction rights,',
          'objection rights,',
          'portability rights,',
          'and consent withdrawal rights.'
        ]
      },
      { type: 'p', text: 'Suuvo may require identity verification before processing certain requests.' },
      { type: 'p', text: 'Certain requests may be limited where:' },
      {
        type: 'ul',
        items: [
          'legally permitted,',
          'operationally necessary,',
          'or required for safety, fraud prevention, or legal compliance.'
        ]
      }
    ]
  },
  {
    id: 'third-party-services',
    number: '13',
    title: 'Third-Party Services',
    items: [
      { type: 'p', text: 'Suuvo may integrate with:' },
      {
        type: 'ul',
        items: [
          'payment providers,',
          'app stores,',
          'cloud providers,',
          'analytics vendors,',
          'advertising systems,',
          'and third-party services.'
        ]
      },
      { type: 'p', text: 'Suuvo is not responsible for:' },
      {
        type: 'ul',
        items: ['third-party systems,', 'third-party privacy practices,', 'external links,', 'or third-party policies.']
      },
      { type: 'p', text: 'Users should review applicable third-party policies separately.' }
    ]
  },
  {
    id: 'cookies-tracking',
    number: '14',
    title: 'Cookies & Tracking Disclosures',
    items: [
      { type: 'p', text: 'Suuvo may use:' },
      {
        type: 'ul',
        items: [
          'essential cookies,',
          'analytics cookies,',
          'performance technologies,',
          'authentication technologies,',
          'and personalization technologies.'
        ]
      },
      {
        type: 'p',
        text: 'Users may disable certain cookies through browser settings, though portions of the platform may not function properly without certain technologies enabled.'
      }
    ]
  },
  {
    id: 'do-not-track',
    number: '15',
    title: 'Do Not Track',
    items: [
      {
        type: 'p',
        text: 'Browser "Do Not Track" settings may not be recognized uniformly due to differing industry standards and technical limitations.'
      }
    ]
  },
  {
    id: 'california-privacy',
    number: '16',
    title: 'California Privacy Rights',
    items: [
      { type: 'p', text: 'California residents may have additional rights under applicable law including rights related to:' },
      { type: 'ul', items: ['access,', 'deletion,', 'correction,', 'and information disclosures.'] },
      {
        type: 'p',
        text: 'Suuvo does not sell personal information as traditionally defined under applicable California privacy laws.'
      }
    ]
  },
  {
    id: 'european-privacy',
    number: '17',
    title: 'European Privacy Rights',
    items: [
      { type: 'p', text: 'Users in certain regions may have rights under applicable laws including:' },
      { type: 'ul', items: ['GDPR,', 'UK GDPR,', 'or similar privacy frameworks.'] },
      { type: 'p', text: 'Suuvo may process information based on:' },
      {
        type: 'ul',
        items: ['consent,', 'contractual necessity,', 'legitimate interests,', 'legal obligations,', 'or other lawful bases.']
      }
    ]
  },
  {
    id: 'changes-policy',
    number: '18',
    title: 'Changes to This Privacy Policy',
    items: [
      { type: 'p', text: 'Suuvo may modify this Privacy Policy at any time.' },
      { type: 'p', text: 'Updated versions will be posted with revised effective dates.' },
      {
        type: 'p',
        text: 'Continued use of the platform following updates constitutes acknowledgment of the revised Privacy Policy.'
      }
    ]
  },
  {
    id: 'contact-information',
    number: '19',
    title: 'Contact Information',
    items: [
      { type: 'p', text: 'SUUVO, INC.\n1201 N Market Street, Suite 111\nWilmington, DE 19801\nUnited States' },
      { type: 'p', text: 'Legal Contact Email: Legal@suuvo.com' },
      { type: 'p', text: 'Support Contact Email: Support@Suuvo.com' }
    ]
  },
  {
    id: 'acknowledgment',
    number: '20',
    title: 'Final Acknowledgment',
    items: [
      { type: 'p', text: 'By using Suuvo, users acknowledge that:' },
      {
        type: 'ul',
        items: [
          'information may be collected and processed,',
          'automated systems may assist operations and moderation,',
          'content and activity may be analyzed for safety and platform operations,',
          'international data transfers may occur,',
          'and continued use of the platform constitutes acceptance of this Privacy Policy.'
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
          if (item.type === 'h') {
            return (
              <p
                key={i}
                className={`!mt-5 text-[13px] font-bold tracking-[0.08em] uppercase ${
                  isContact ? 'text-white/60' : 'text-[#DE127B]'
                }`}
              >
                {item.text}
              </p>
            )
          }

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

export default function PrivacyPolicyView() {
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
      <div className='bg-[linear-gradient(135deg,#a6a3ff_0%,#645ffe_50%,#DE127B_100%)] relative overflow-hidden'>
        <div className='absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none' />
        <div className='absolute top-8 left-1/2 w-56 h-56 rounded-full bg-white/5 blur-2xl pointer-events-none' />
        <div className='absolute -bottom-12 left-10 w-72 h-72 rounded-full bg-white/8 blur-3xl pointer-events-none' />

        <div className='s-container pt-20 pb-16 md:pt-28 md:pb-20 relative z-10'>
          <p className='text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase mb-3'>
            Suuvo, Inc.
          </p>
          <Typography variant='h2' className='text-white leading-tight! max-w-2xl'>
            Privacy Policy
          </Typography>
          <p className='mt-4 text-[15px] md:text-[16px] font-medium leading-6 tracking-[-0.02em] text-white/70 max-w-xl'>
            How we collect, use, store, and protect your personal information across the Suuvo platform.
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

          <div className='mt-8 flex flex-wrap gap-3'>
            {['20 Sections', 'We Do Not Sell Your Data', 'Global Coverage'].map(label => (
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
                          ? 'bg-[linear-gradient(135deg,#a6a3ff_0%,#645ffe_50%,#DE127B_100%)] text-white'
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
