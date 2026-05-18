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
        text: 'This Support Policy & Help Center Terms document ("Support Policy") governs support services, customer assistance systems, reporting systems, appeals systems, and help resources provided by Suuvo, Inc. ("Suuvo," "Company," "we," "our," or "us").'
      },
      { type: 'p', text: 'This Support Policy applies to:' },
      {
        type: 'ul',
        items: ['viewers,', 'creators,', 'sellers,', 'businesses,', 'advertisers,', 'agencies,', 'and all users of the Suuvo platform.']
      },
      { type: 'p', text: 'By using Suuvo support systems, users agree to:' },
      {
        type: 'ul',
        items: ['cooperate honestly,', 'provide accurate information,', 'comply with platform policies,', 'and use support systems responsibly.']
      },
      { type: 'p', text: 'Support services may include:' },
      {
        type: 'ul',
        items: ['Help Center access,', 'technical support,', 'account recovery,', 'appeals,', 'reporting systems,', 'monetization assistance,', 'LIVE support,', 'Shops support,', 'safety reporting,', 'and other support services.']
      }
    ]
  },
  {
    id: 'help-center',
    number: '02',
    title: 'Help Center Services',
    items: [
      { type: 'p', text: 'Suuvo may provide self-service Help Center resources including:' },
      {
        type: 'ul',
        items: ['troubleshooting articles,', 'creator education,', 'monetization guidance,', 'LIVE guidance,', 'safety information,', 'Shops information,', 'account recovery guidance,', 'and platform tutorials.']
      },
      { type: 'p', text: 'Help Center information is provided for general informational purposes only.' },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: ['update articles,', 'remove guidance,', 'modify instructions,', 'or discontinue support materials at any time.']
      },
      { type: 'p', text: 'Help Center content does not constitute:' },
      {
        type: 'ul',
        items: ['legal advice,', 'financial advice,', 'tax advice,', 'investment advice,', 'or guaranteed platform outcomes.']
      }
    ]
  },
  {
    id: 'contact-support',
    number: '03',
    title: 'Contact Support',
    items: [
      { type: 'p', text: 'Users may contact Suuvo support through:' },
      {
        type: 'ul',
        items: ['website forms,', 'in-app support systems,', 'support email systems,', 'reporting systems,', 'or other designated support channels.']
      },
      { type: 'p', text: 'Users agree to provide:' },
      { type: 'ul', items: ['accurate information,', 'truthful descriptions,', 'and reasonable supporting evidence where requested.'] },
      { type: 'p', text: 'Suuvo may request:' },
      {
        type: 'ul',
        items: ['identity verification,', 'account verification,', 'payment verification,', 'or additional documentation before providing certain support services.']
      },
      { type: 'p', text: 'Support requests may be prioritized based on:' },
      { type: 'ul', items: ['severity,', 'safety concerns,', 'technical impact,', 'platform abuse risk,', 'or operational requirements.'] },
      { type: 'p', text: 'Suuvo does not guarantee:' },
      { type: 'ul', items: ['response times,', 'resolution times,', 'or specific support outcomes.'] }
    ]
  },
  {
    id: 'account-recovery',
    number: '04',
    title: 'Account Recovery & Security Support',
    items: [
      { type: 'p', text: 'Users are responsible for maintaining account security.' },
      { type: 'p', text: 'Suuvo may provide account recovery assistance where possible.' },
      { type: 'p', text: 'Users requesting account recovery may be required to provide:' },
      {
        type: 'ul',
        items: ['identity verification,', 'device verification,', 'account ownership evidence,', 'payment verification,', 'or additional security information.']
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      { type: 'ul', items: ['deny recovery requests,', 'suspend compromised accounts,', 'restrict access,', 'or require additional security review.'] },
      { type: 'p', text: 'Suuvo is not responsible for losses resulting from:' },
      {
        type: 'ul',
        items: ['compromised credentials,', 'phishing,', 'user negligence,', 'unauthorized sharing of credentials,', 'or third-party security breaches.']
      }
    ]
  },
  {
    id: 'technical-support',
    number: '05',
    title: 'Technical Support',
    items: [
      { type: 'p', text: 'Suuvo may provide technical assistance for:' },
      {
        type: 'ul',
        items: ['login issues,', 'crashes,', 'upload failures,', 'playback issues,', 'LIVE issues,', 'monetization issues,', 'notification issues,', 'or other platform functionality problems.']
      },
      { type: 'p', text: 'Users agree to cooperate with troubleshooting requests including:' },
      { type: 'ul', items: ['providing screenshots,', 'logs,', 'device information,', 'or reproduction steps where appropriate.'] },
      { type: 'p', text: 'Suuvo does not guarantee uninterrupted functionality or immediate issue resolution.' }
    ]
  },
  {
    id: 'monetization-support',
    number: '06',
    title: 'Monetization Support',
    items: [
      { type: 'p', text: 'Creators may request support related to:' },
      { type: 'ul', items: ['payouts,', 'gifts,', 'subscriptions,', 'rewards,', 'Shops,', 'monetization eligibility,', 'or creator systems.'] },
      { type: 'p', text: 'Suuvo may require:' },
      {
        type: 'ul',
        items: ['identity verification,', 'tax documentation,', 'payout verification,', 'banking verification,', 'or fraud review before resolving monetization issues.']
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      { type: 'ul', items: ['investigate suspicious activity,', 'delay support resolution,', 'hold payouts,', 'restrict monetization,', 'or deny monetization access.'] },
      { type: 'p', text: 'Support responses regarding monetization do not constitute:' },
      { type: 'ul', items: ['guarantees of future earnings,', 'tax advice,', 'financial advice,', 'or investment advice.'] }
    ]
  },
  {
    id: 'shops-support',
    number: '07',
    title: 'Shops & Commerce Support',
    items: [
      { type: 'p', text: 'Suuvo may provide support related to:' },
      { type: 'ul', items: ['storefronts,', 'orders,', 'commerce systems,', 'affiliate systems,', 'and product listings.'] },
      { type: 'p', text: 'Sellers remain responsible for:' },
      { type: 'ul', items: ['fulfillment,', 'customer support,', 'warranties,', 'taxes,', 'refunds,', 'and legal compliance.'] },
      { type: 'p', text: 'Suuvo may assist with:' },
      { type: 'ul', items: ['dispute review,', 'fraud investigations,', 'listing issues,', 'or platform-level enforcement.'] },
      { type: 'p', text: 'Suuvo is not responsible for:' },
      { type: 'ul', items: ['third-party product quality,', 'shipping failures,', 'seller misconduct,', 'or buyer disputes except where required by law.'] }
    ]
  },
  {
    id: 'safety-reporting',
    number: '08',
    title: 'Safety Reporting',
    items: [
      { type: 'p', text: 'Users may report:' },
      {
        type: 'ul',
        items: ['harmful content,', 'harassment,', 'scams,', 'impersonation,', 'abuse,', 'child safety concerns,', 'intellectual property violations,', 'fraud,', 'or other policy violations.']
      },
      { type: 'p', text: 'Reports may be reviewed by:' },
      { type: 'ul', items: ['moderation systems,', 'AI systems,', 'human moderators,', 'safety teams,', 'or legal/compliance teams.'] },
      { type: 'p', text: 'Submitting false, abusive, or malicious reports may violate platform policies.' },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      { type: 'ul', items: ['remove content,', 'restrict accounts,', 'suspend users,', 'or escalate serious matters to authorities where appropriate.'] }
    ]
  },
  {
    id: 'appeals',
    number: '09',
    title: 'Appeals',
    items: [
      { type: 'p', text: 'Users may have access to appeals systems for certain moderation or enforcement actions.' },
      { type: 'p', text: 'Appeals may relate to:' },
      {
        type: 'ul',
        items: ['content removal,', 'monetization restrictions,', 'LIVE restrictions,', 'account suspensions,', 'recommendation restrictions,', 'or other enforcement actions.']
      },
      { type: 'p', text: 'Appeals may be reviewed by:' },
      { type: 'ul', items: ['automated systems,', 'human moderators,', 'specialized review teams,', 'or compliance personnel.'] },
      { type: 'p', text: 'Suuvo reserves sole discretion regarding:' },
      { type: 'ul', items: ['appeals outcomes,', 'review standards,', 'evidence requirements,', 'and final decisions.'] },
      { type: 'p', text: 'Submitting abusive or fraudulent appeals may result in additional enforcement.' }
    ]
  },
  {
    id: 'response-times',
    number: '10',
    title: 'Response Times',
    items: [
      { type: 'p', text: 'Suuvo does not guarantee:' },
      { type: 'ul', items: ['support response times,', 'investigation timelines,', 'appeals timelines,', 'or issue resolution timelines.'] },
      { type: 'p', text: 'Response priorities may vary depending on:' },
      { type: 'ul', items: ['safety risks,', 'severity,', 'platform impact,', 'legal obligations,', 'operational requirements,', 'or abuse investigations.'] }
    ]
  },
  {
    id: 'support-communications',
    number: '11',
    title: 'Support Communications',
    items: [
      { type: 'p', text: 'Users must communicate respectfully with support personnel.' },
      { type: 'p', text: 'Users may not:' },
      { type: 'ul', items: ['threaten staff,', 'harass moderators,', 'spam support systems,', 'impersonate others,', 'submit fraudulent documentation,', 'or abuse support channels.'] },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      { type: 'ul', items: ['restrict support access,', 'suspend accounts,', 'or terminate support communications for abusive conduct.'] }
    ]
  },
  {
    id: 'ai-systems',
    number: '12',
    title: 'AI & Automated Support Systems',
    items: [
      { type: 'p', text: 'Suuvo may use:' },
      { type: 'ul', items: ['AI systems,', 'automated chat systems,', 'automated moderation systems,', 'automated fraud systems,', 'and recommendation systems'] },
      { type: 'p', text: 'to assist with support operations.' },
      { type: 'p', text: 'Automated systems may:' },
      { type: 'ul', items: ['classify requests,', 'prioritize tickets,', 'flag suspicious activity,', 'provide automated responses,', 'or assist moderation reviews.'] },
      { type: 'p', text: 'AI systems may not always be accurate. Suuvo may combine automated systems, AI systems, human review, and manual investigations.' }
    ]
  },
  {
    id: 'privacy-data',
    number: '13',
    title: 'Privacy & Support Data',
    items: [
      { type: 'p', text: 'Information submitted through support systems may be collected, processed, stored, reviewed, and analyzed for:' },
      { type: 'ul', items: ['support operations,', 'fraud prevention,', 'moderation,', 'legal compliance,', 'platform improvement,', 'and safety investigations.'] },
      { type: 'p', text: 'Support communications may be retained for:' },
      { type: 'ul', items: ['operational purposes,', 'legal obligations,', 'abuse prevention,', 'training,', 'and compliance requirements.'] },
      { type: 'p', text: 'Use of support systems is also governed by the Privacy Policy.' }
    ]
  },
  {
    id: 'law-enforcement',
    number: '14',
    title: 'Law Enforcement & Legal Requests',
    items: [
      { type: 'p', text: 'Suuvo may cooperate with:' },
      { type: 'ul', items: ['law enforcement,', 'regulators,', 'child safety organizations,', 'legal authorities,', 'or government agencies'] },
      { type: 'p', text: 'where required by law or necessary to protect safety.' },
      { type: 'p', text: 'Certain reports may be escalated where:' },
      { type: 'ul', items: ['legally required,', 'necessary to prevent harm,', 'or necessary to comply with legal obligations.'] }
    ]
  },
  {
    id: 'disclaimers',
    number: '15',
    title: 'Disclaimers',
    items: [
      { type: 'p', text: 'Support services are provided "as is" and "as available."' },
      { type: 'p', text: 'Suuvo does not guarantee:' },
      { type: 'ul', items: ['uninterrupted support availability,', 'issue resolution,', 'account recovery success,', 'monetization restoration,', 'or appeals reversals.'] },
      { type: 'p', text: 'Support guidance does not constitute:' },
      { type: 'ul', items: ['legal advice,', 'financial advice,', 'tax advice,', 'or investment advice.'] }
    ]
  },
  {
    id: 'liability',
    number: '16',
    title: 'Limitation of Liability',
    items: [
      { type: 'p', text: 'To the maximum extent permitted by law, Suuvo shall not be liable for:' },
      {
        type: 'ul',
        items: ['unresolved support issues,', 'delayed responses,', 'account recovery failures,', 'monetization interruptions,', 'technical issues,', 'lost profits,', 'lost business opportunities,', 'or indirect damages.']
      },
      {
        type: 'p',
        text: "Where legally permitted, Suuvo's aggregate liability shall not exceed amounts paid by the user to Suuvo in the preceding twelve months."
      }
    ]
  },
  {
    id: 'changes',
    number: '17',
    title: 'Changes to Support Policy',
    items: [
      { type: 'p', text: 'Suuvo may modify this Support Policy at any time.' },
      { type: 'p', text: 'Continued use of support systems following updates constitutes acceptance of revised policies.' }
    ]
  },
  {
    id: 'contact-information',
    number: '18',
    title: 'Contact Information',
    items: [
      { type: 'p', text: 'SUUVO, INC.\n1201 N Market Street, Suite 111\nWilmington, DE 19801\nUnited States' },
      { type: 'p', text: 'Legal Contact Email: Legal@suuvo.com' },
      { type: 'p', text: 'Support Contact Email: Support@Suuvo.com' }
    ]
  },
  {
    id: 'acknowledgment',
    number: '19',
    title: 'Final Acknowledgment',
    items: [
      { type: 'p', text: 'By using Suuvo support systems, users acknowledge that:' },
      {
        type: 'ul',
        items: [
          'support availability may vary,',
          'support outcomes are not guaranteed,',
          'AI and automated systems may assist support operations,',
          'moderation and enforcement decisions may occur,',
          'and continued use requires compliance with all platform rules, policies, and applicable laws.'
        ]
      }
    ]
  }
]

function SectionCard({ section, isActive }: { section: Section; isActive: boolean }) {
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
      {/* Section header */}
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

      {/* Section body */}
      <div className={`ml-14 space-y-3 text-[14px] md:text-[15px] leading-7 font-medium tracking-[-0.02em] ${isContact ? 'text-white/90' : 'text-[#1E1E1E]/70'}`}>
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
                <a href={`mailto:${email}`} className='underline underline-offset-2 hover:opacity-80 transition-opacity'>
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

export default function HelpCenterView() {
  const [activeId, setActiveId] = useState<string>(sections[0].id)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const tocRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]

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

  // Scroll active TOC item into view
  useEffect(() => {
    if (!tocRef.current) return
    const activeEl = tocRef.current.querySelector(`[data-id="${activeId}"]`) as HTMLElement | null
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [activeId])

  return (
    <div className='min-h-screen bg-[#fafafa]'>
      {/* Hero Banner */}
      <div className='bg-[linear-gradient(135deg,#EF9F22_0%,#DE127B_100%)] relative overflow-hidden'>
        {/* Subtle decorative blobs */}
        <div className='absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none' />
        <div className='absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-white/10 blur-3xl pointer-events-none' />

        <div className='s-container pt-20 pb-16 md:pt-28 md:pb-20 relative z-10'>
          <p className='text-white/70 text-[11px] font-bold tracking-[0.2em] uppercase mb-3'>Suuvo, Inc.</p>
          <Typography variant='h2' className='text-white leading-tight! max-w-2xl'>
            Support Policy &amp; Help Center Terms
          </Typography>
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
        </div>
      </div>

      {/* Main Content */}
      <div className='s-container py-12 md:py-16'>
        <div className='flex gap-8 xl:gap-12 items-start'>

          {/* Sticky Sidebar TOC */}
          <aside className='hidden lg:block w-64 xl:w-72 shrink-0 sticky top-28'>
            <div className='bg-white rounded-2xl shadow-[1px_6px_13px_0px_#0000000A,4px_23px_23px_0px_#00000008] overflow-hidden'>
              <div className='px-5 py-4 border-b border-black/5'>
                <p className='text-[11px] font-bold tracking-[0.15em] uppercase text-[#1E1E1E]/40'>Table of Contents</p>
              </div>
              <nav ref={tocRef} className='p-3 max-h-[calc(100vh-12rem)] overflow-y-auto'>
                {sections.map(section => {
                  const isActive = activeId === section.id
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      data-id={section.id}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-medium tracking-[-0.01em] transition-all duration-200 group ${
                        isActive
                          ? 'bg-[linear-gradient(135deg,#EF9F22_0%,#DE127B_100%)] text-white'
                          : 'text-[#1E1E1E]/60 hover:text-[#1E1E1E] hover:bg-black/5'
                      }`}
                    >
                      <span
                        className={`shrink-0 text-[10px] font-bold w-6 text-center ${isActive ? 'text-white/70' : 'text-[#1E1E1E]/30 group-hover:text-[#1E1E1E]/50'}`}
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
              <SectionCard key={section.id} section={section} isActive={activeId === section.id} />
            ))}

            {/* Bottom note */}
            <p className='text-center text-[13px] text-[#1E1E1E]/40 font-medium tracking-[-0.01em] pt-4'>
              &copy; {new Date().getFullYear()} Suuvo, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
