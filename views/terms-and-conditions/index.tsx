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
    id: 'acceptance-of-terms',
    number: '01',
    title: 'Acceptance of Terms',
    items: [
      { type: 'p', text: 'Welcome to Suuvo.' },
      {
        type: 'p',
        text: 'These Terms & Conditions ("Terms") govern your access to and use of the Suuvo platform, including:'
      },
      {
        type: 'ul',
        items: [
          'websites,',
          'mobile applications,',
          'creator systems,',
          'monetization systems,',
          'LIVE systems,',
          'messaging systems,',
          'commerce systems,',
          'recommendation systems,',
          'AI-powered systems,',
          'virtual item systems,',
          'and all related products, services, features, software, technologies, and tools operated by Suuvo, Inc. ("Suuvo," "Company," "we," "our," or "us").'
        ]
      },
      {
        type: 'p',
        text: 'By accessing, browsing, downloading, installing, registering for, or using Suuvo, you agree to be legally bound by these Terms and all incorporated:'
      },
      { type: 'ul', items: ['policies,', 'standards,', 'rules,', 'disclosures,', 'and guidelines.'] },
      {
        type: 'p',
        text: 'If you do not agree to these Terms, you may not access or use the platform.'
      },
      { type: 'p', text: 'These Terms apply to:' },
      {
        type: 'ul',
        items: ['viewers,', 'creators,', 'sellers,', 'businesses,', 'advertisers,', 'agencies,', 'moderators,', 'guests,', 'and all other users or participants.']
      }
    ]
  },
  {
    id: 'eligibility',
    number: '02',
    title: 'Eligibility',
    items: [
      { type: 'p', text: 'To use Suuvo, you must:' },
      {
        type: 'ul',
        items: [
          'meet the minimum legal age required in your jurisdiction,',
          'possess the legal authority to enter into binding agreements,',
          'comply with all applicable laws and regulations,',
          'and not be prohibited from using the platform under applicable law.'
        ]
      },
      {
        type: 'p',
        text: 'If you are under the age of majority in your jurisdiction, you represent that your parent or legal guardian has reviewed and agreed to these Terms where legally required.'
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: [
          'restrict access,',
          'deny registration,',
          'require age verification,',
          'require identity verification,',
          'require payment verification,',
          'require tax documentation,',
          'or terminate accounts at its discretion.'
        ]
      },
      { type: 'p', text: 'Certain features may require:' },
      {
        type: 'ul',
        items: [
          'creator approval,',
          'monetization approval,',
          'business verification,',
          'enhanced compliance review,',
          'or additional eligibility requirements.'
        ]
      },
      { type: 'p', text: 'Feature availability may vary based on:' },
      {
        type: 'ul',
        items: ['region,', 'age,', 'jurisdiction,', 'device,', 'platform provider restrictions,', 'or legal limitations.']
      }
    ]
  },
  {
    id: 'account-registration',
    number: '03',
    title: 'Account Registration',
    items: [
      { type: 'p', text: 'Users may be required to create an account to access certain platform features.' },
      { type: 'p', text: 'You agree to:' },
      {
        type: 'ul',
        items: [
          'provide accurate information,',
          'maintain updated information,',
          'protect your login credentials,',
          'and remain responsible for all activity associated with your account.'
        ]
      },
      { type: 'p', text: 'You may not:' },
      {
        type: 'ul',
        items: [
          'impersonate another person or entity,',
          'create deceptive or misleading accounts,',
          'create accounts for fraudulent purposes,',
          'transfer or sell accounts without authorization,',
          'evade enforcement actions,',
          'or use unauthorized automation to create accounts.'
        ]
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: [
          'reclaim usernames,',
          'disable inactive accounts,',
          'merge duplicate accounts,',
          'remove deceptive usernames,',
          'or require additional verification.'
        ]
      },
      { type: 'p', text: 'You are responsible for:' },
      {
        type: 'ul',
        items: ['maintaining account security,', 'securing associated devices,', 'and all activity occurring through your account.']
      },
      { type: 'p', text: 'You must notify Suuvo immediately of:' },
      {
        type: 'ul',
        items: ['unauthorized access,', 'credential compromise,', 'suspicious activity,', 'or security concerns.']
      }
    ]
  },
  {
    id: 'user-conduct',
    number: '04',
    title: 'User Conduct',
    items: [
      { type: 'p', text: 'Users must use Suuvo lawfully, responsibly, and respectfully.' },
      { type: 'p', text: 'You agree not to:' },
      {
        type: 'ul',
        items: ['harass,', 'threaten,', 'intimidate,', 'stalk,', 'exploit,', 'or abuse others.']
      },
      { type: 'p', text: 'You may not:' },
      {
        type: 'ul',
        items: [
          'post hateful or discriminatory content,',
          'promote violence or terrorism,',
          'exploit minors,',
          'engage in fraud or scams,',
          'impersonate others,',
          'distribute malware,',
          'interfere with platform operations,',
          'manipulate monetization systems,',
          'artificially inflate engagement,',
          'distribute spam,',
          'violate intellectual property rights,',
          'evade enforcement actions,',
          'or violate applicable laws.'
        ]
      },
      { type: 'p', text: 'You may not:' },
      {
        type: 'ul',
        items: [
          'manipulate recommendation systems,',
          'manipulate LIVE systems,',
          'manipulate creator rewards systems,',
          'manipulate subscriptions,',
          'manipulate gifting systems,',
          'manipulate discovery systems,',
          'or use bots or automation to distort platform operations.'
        ]
      },
      { type: 'p', text: 'Suuvo reserves sole discretion to determine whether conduct violates:' },
      {
        type: 'ul',
        items: ['these Terms,', 'Community Guidelines,', 'monetization policies,', 'or platform standards.']
      }
    ]
  },
  {
    id: 'user-content',
    number: '05',
    title: 'User Content',
    items: [
      {
        type: 'p',
        text: 'Users may upload, publish, stream, distribute, transmit, or share content including:'
      },
      {
        type: 'ul',
        items: [
          'videos,',
          'images,',
          'LIVE streams,',
          'comments,',
          'captions,',
          'messages,',
          'product listings,',
          'audio,',
          'graphics,',
          'text,',
          'and other materials ("User Content").'
        ]
      },
      { type: 'p', text: 'You retain ownership of your User Content.' },
      {
        type: 'p',
        text: 'However, by uploading or publishing User Content, you grant Suuvo a worldwide, non-exclusive, royalty-free, sublicensable, transferable license to:'
      },
      {
        type: 'ul',
        items: [
          'host,',
          'reproduce,',
          'display,',
          'distribute,',
          'cache,',
          'process,',
          'adapt for formatting,',
          'transcode,',
          'promote,',
          'analyze,',
          'index,',
          'and make available your content in connection with platform operations.'
        ]
      },
      { type: 'p', text: 'This license includes use in:' },
      {
        type: 'ul',
        items: [
          'recommendation systems,',
          'discovery systems,',
          'AI moderation systems,',
          'search systems,',
          'platform feeds,',
          'promotional systems,',
          'accessibility systems,',
          'and operational systems.'
        ]
      },
      { type: 'p', text: 'You represent and warrant that:' },
      {
        type: 'ul',
        items: [
          'you own or control the rights to your content,',
          'your content complies with applicable laws,',
          'your content does not infringe third-party rights,',
          'and you are authorized to upload such content.'
        ]
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: [
          'remove content,',
          'age-restrict content,',
          'limit visibility,',
          'disable sharing,',
          'demonetize content,',
          'or disable access to content at any time.'
        ]
      }
    ]
  },
  {
    id: 'live-streaming',
    number: '06',
    title: 'Live Streaming & Interactive Features',
    items: [
      { type: 'p', text: 'Suuvo may provide LIVE systems including:' },
      {
        type: 'ul',
        items: [
          'LIVE broadcasts,',
          'PK battles,',
          'co-host systems,',
          'guest systems,',
          'audience participation,',
          'gifting systems,',
          'creator interactions,',
          'and interactive experiences.'
        ]
      },
      { type: 'p', text: 'Participation in LIVE systems requires compliance with:' },
      {
        type: 'ul',
        items: ['platform policies,', 'moderation rules,', 'monetization rules,', 'and safety systems.']
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: ['mute,', 'interrupt,', 'restrict,', 'terminate,', 'remove,', 'or suspend LIVE sessions at its discretion.']
      },
      { type: 'p', text: 'Certain LIVE features may:' },
      {
        type: 'ul',
        items: [
          'require verification,',
          'require monetization approval,',
          'require age eligibility,',
          'or be unavailable in certain regions.'
        ]
      },
      { type: 'p', text: 'Users acknowledge that:' },
      {
        type: 'ul',
        items: [
          'LIVE systems involve real-time interactions,',
          'moderation decisions may occur dynamically,',
          'and platform visibility may fluctuate.'
        ]
      }
    ]
  },
  {
    id: 'monetization',
    number: '07',
    title: 'Monetization',
    items: [
      { type: 'p', text: 'Suuvo may offer monetization systems including:' },
      {
        type: 'ul',
        items: [
          'gifts,',
          'subscriptions,',
          'creator rewards,',
          'Shops,',
          'affiliate systems,',
          'creator incentives,',
          'premium content,',
          'sponsorship systems,',
          'advertising systems,',
          'and virtual economies.'
        ]
      },
      { type: 'p', text: 'Participation in monetization systems is conditional and may require:' },
      {
        type: 'ul',
        items: [
          'identity verification,',
          'age verification,',
          'tax documentation,',
          'payout setup,',
          'policy compliance,',
          'or business approval.'
        ]
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: [
          'modify monetization systems,',
          'adjust payout structures,',
          'delay payouts,',
          'investigate suspicious activity,',
          'reverse improperly obtained earnings,',
          'suspend monetization access,',
          'limit eligibility,',
          'or terminate monetization participation.'
        ]
      },
      { type: 'p', text: 'Creators are solely responsible for:' },
      {
        type: 'ul',
        items: [
          'taxes,',
          'disclosures,',
          'legal compliance,',
          'financial reporting obligations,',
          'and lawful business operations.'
        ]
      },
      { type: 'p', text: 'Suuvo does not guarantee:' },
      {
        type: 'ul',
        items: [
          'creator income,',
          'monetization success,',
          'sponsorship opportunities,',
          'audience growth,',
          'or platform visibility.'
        ]
      }
    ]
  },
  {
    id: 'virtual-currency',
    number: '08',
    title: 'Virtual Currency & Digital Items',
    items: [
      { type: 'p', text: 'Suuvo may provide:' },
      {
        type: 'ul',
        items: ['virtual coins,', 'digital gifts,', 'premium effects,', 'badges,', 'creator rewards,', 'and virtual items.']
      },
      { type: 'p', text: 'Virtual items:' },
      {
        type: 'ul',
        items: [
          'are licensed, not sold,',
          'may have no cash value,',
          'may not constitute property rights,',
          'and may not be transferable unless expressly permitted.'
        ]
      },
      { type: 'p', text: 'Virtual items may:' },
      { type: 'ul', items: ['expire,', 'be modified,', 'be revoked,', 'or be discontinued at any time.'] },
      { type: 'p', text: 'All purchases are final except where required by law.' },
      { type: 'p', text: 'Unauthorized resale, transfer, exchange, exploitation, or external monetization is prohibited.' },
      { type: 'p', text: 'Virtual items are not:' },
      {
        type: 'ul',
        items: ['bank accounts,', 'financial instruments,', 'securities,', 'investments,', 'or guaranteed assets.']
      },
      { type: 'p', text: 'Nothing within the platform constitutes:' },
      {
        type: 'ul',
        items: ['investment advice,', 'securities offerings,', 'financial guarantees,', 'or promises of future value.']
      }
    ]
  },
  {
    id: 'subscriptions',
    number: '09',
    title: 'Subscriptions',
    items: [
      { type: 'p', text: 'Suuvo may offer recurring subscription services.' },
      { type: 'p', text: 'By subscribing, users authorize recurring billing where applicable.' },
      { type: 'p', text: 'Subscriptions may:' },
      {
        type: 'ul',
        items: [
          'renew automatically,',
          'continue until canceled,',
          'and be processed through third-party billing systems including Apple and Google.'
        ]
      },
      { type: 'p', text: 'Subscription pricing may change.' },
      { type: 'p', text: 'Users are responsible for:' },
      {
        type: 'ul',
        items: ['managing subscriptions,', 'maintaining valid payment methods,', 'and cancellation timing.']
      },
      { type: 'p', text: 'Refund eligibility is subject to:' },
      { type: 'ul', items: ['applicable law,', 'app marketplace policies,', 'and Suuvo policies.'] }
    ]
  },
  {
    id: 'shops-commerce',
    number: '10',
    title: 'Shops & Commerce',
    items: [
      { type: 'p', text: 'Suuvo may provide commerce systems including:' },
      {
        type: 'ul',
        items: [
          'creator storefronts,',
          'product listings,',
          'affiliate commerce,',
          'LIVE shopping,',
          'and digital commerce tools.'
        ]
      },
      { type: 'p', text: 'Sellers are solely responsible for:' },
      {
        type: 'ul',
        items: [
          'products,',
          'legality,',
          'shipping,',
          'taxes,',
          'warranties,',
          'customer support,',
          'refunds,',
          'and compliance with applicable laws.'
        ]
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: [
          'remove products,',
          'restrict sellers,',
          'investigate fraud,',
          'suspend commerce features,',
          'or remove prohibited listings.'
        ]
      },
      { type: 'p', text: 'Suuvo is not responsible for disputes between:' },
      { type: 'ul', items: ['buyers,', 'sellers,', 'creators,', 'or third parties except where required by law.'] }
    ]
  },
  {
    id: 'intellectual-property',
    number: '11',
    title: 'Intellectual Property',
    items: [
      { type: 'p', text: 'All platform materials including:' },
      {
        type: 'ul',
        items: [
          'software,',
          'systems,',
          'workflows,',
          'interfaces,',
          'graphics,',
          'branding,',
          'trademarks,',
          'logos,',
          'AI systems,',
          'platform architecture,',
          'and designs'
        ]
      },
      {
        type: 'p',
        text: 'are owned by Suuvo or its licensors and are protected by intellectual property laws.'
      },
      { type: 'p', text: 'Users may not:' },
      {
        type: 'ul',
        items: [
          'copy,',
          'reverse engineer,',
          'scrape,',
          'reproduce,',
          'distribute,',
          'exploit,',
          'or commercially use platform materials without authorization.'
        ]
      }
    ]
  },
  {
    id: 'copyright-complaints',
    number: '12',
    title: 'Copyright Complaints',
    items: [
      { type: 'p', text: 'Suuvo respects intellectual property rights.' },
      {
        type: 'p',
        text: 'Users who believe content infringes their rights may submit notices pursuant to applicable copyright laws including the DMCA.'
      },
      { type: 'p', text: 'Suuvo may:' },
      {
        type: 'ul',
        items: [
          'remove allegedly infringing content,',
          'disable repeat infringers,',
          'restrict accounts,',
          'or terminate accounts.'
        ]
      },
      { type: 'p', text: 'False or abusive reports may result in liability.' }
    ]
  },
  {
    id: 'ai-systems',
    number: '13',
    title: 'AI Systems & Automated Processing',
    items: [
      { type: 'p', text: 'Suuvo may use AI and automated systems for:' },
      {
        type: 'ul',
        items: [
          'moderation,',
          'recommendations,',
          'ranking,',
          'search,',
          'fraud prevention,',
          'accessibility,',
          'creator assistance,',
          'enhancement tools,',
          'analytics,',
          'safety systems,',
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
          'restrict monetization,',
          'detect abuse,',
          'or prioritize content.'
        ]
      },
      { type: 'p', text: 'AI systems may not always be accurate.' },
      { type: 'p', text: 'Suuvo may combine:' },
      {
        type: 'ul',
        items: ['AI systems,', 'human review,', 'automated enforcement,', 'and manual enforcement.']
      },
      { type: 'p', text: 'Suuvo reserves the right to improve and evolve AI systems over time.' }
    ]
  },
  {
    id: 'privacy',
    number: '14',
    title: 'Privacy',
    items: [
      { type: 'p', text: 'Use of Suuvo is governed by the Privacy Policy.' },
      { type: 'p', text: 'Users acknowledge that information may be:' },
      {
        type: 'ul',
        items: ['collected,', 'analyzed,', 'processed,', 'transferred,', 'stored,', 'and shared']
      },
      { type: 'p', text: 'as described in the Privacy Policy.' }
    ]
  },
  {
    id: 'third-party-services',
    number: '15',
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
          'infrastructure providers,',
          'and other third-party services.'
        ]
      },
      { type: 'p', text: 'Suuvo is not responsible for:' },
      {
        type: 'ul',
        items: ['third-party systems,', 'third-party outages,', 'external links,', 'or third-party policies.']
      }
    ]
  },
  {
    id: 'platform-availability',
    number: '16',
    title: 'Platform Availability',
    items: [
      { type: 'p', text: 'Suuvo does not guarantee uninterrupted service.' },
      { type: 'p', text: 'The platform may experience:' },
      {
        type: 'ul',
        items: ['downtime,', 'maintenance,', 'interruptions,', 'delays,', 'outages,', 'bugs,', 'errors,', 'or regional restrictions.']
      },
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: [
          'modify features,',
          'discontinue systems,',
          'restrict access,',
          'or change platform functionality at any time.'
        ]
      }
    ]
  },
  {
    id: 'termination-enforcement',
    number: '17',
    title: 'Termination & Enforcement',
    items: [
      { type: 'p', text: 'Suuvo reserves the right to:' },
      {
        type: 'ul',
        items: [
          'suspend accounts,',
          'terminate accounts,',
          'remove content,',
          'restrict monetization,',
          'restrict LIVE access,',
          'disable features,',
          'or limit platform participation'
        ]
      },
      { type: 'p', text: 'for:' },
      {
        type: 'ul',
        items: [
          'policy violations,',
          'suspicious activity,',
          'fraud,',
          'abuse,',
          'legal compliance,',
          'operational reasons,',
          'or safety concerns.'
        ]
      },
      { type: 'p', text: 'Users may lose:' },
      {
        type: 'ul',
        items: [
          'content access,',
          'monetization,',
          'subscriptions,',
          'rewards,',
          'virtual items,',
          'or platform privileges following enforcement actions.'
        ]
      }
    ]
  },
  {
    id: 'disclaimers',
    number: '18',
    title: 'Disclaimers',
    items: [
      { type: 'p', text: 'The platform is provided "as is" and "as available."' },
      { type: 'p', text: 'Suuvo does not guarantee:' },
      {
        type: 'ul',
        items: [
          'uninterrupted operation,',
          'creator success,',
          'monetization outcomes,',
          'platform growth,',
          'audience growth,',
          'or error-free operation.'
        ]
      }
    ]
  },
  {
    id: 'limitation-of-liability',
    number: '19',
    title: 'Limitation of Liability',
    items: [
      {
        type: 'p',
        text: 'To the maximum extent permitted by law, Suuvo shall not be liable for:'
      },
      {
        type: 'ul',
        items: [
          'indirect damages,',
          'lost profits,',
          'lost data,',
          'reputational harm,',
          'creator losses,',
          'business interruption,',
          'or platform outages.'
        ]
      },
      {
        type: 'p',
        text: "Where legally permitted, Suuvo's aggregate liability shall not exceed amounts paid by the user to Suuvo in the preceding twelve months."
      }
    ]
  },
  {
    id: 'indemnification',
    number: '20',
    title: 'Indemnification',
    items: [
      {
        type: 'p',
        text: 'Users agree to indemnify and hold harmless Suuvo and its affiliates from claims arising from:'
      },
      {
        type: 'ul',
        items: [
          'user conduct,',
          'user content,',
          'law violations,',
          'intellectual property violations,',
          'or misuse of the platform.'
        ]
      }
    ]
  },
  {
    id: 'export-controls',
    number: '21',
    title: 'Export Controls & Sanctions',
    items: [
      { type: 'p', text: 'Users may not use Suuvo in violation of:' },
      {
        type: 'ul',
        items: ['export laws,', 'sanctions laws,', 'trade restrictions,', 'or embargo regulations.']
      },
      { type: 'p', text: 'Suuvo may restrict access in certain jurisdictions.' }
    ]
  },
  {
    id: 'governing-law',
    number: '22',
    title: 'Governing Law',
    items: [
      {
        type: 'p',
        text: 'These Terms shall be governed by the laws of the State of Delaware, without regard to conflict-of-law principles.'
      }
    ]
  },
  {
    id: 'dispute-resolution',
    number: '23',
    title: 'Dispute Resolution',
    items: [
      { type: 'p', text: 'Before filing claims, parties agree to attempt good-faith resolution.' },
      { type: 'p', text: 'Suuvo may require:' },
      {
        type: 'ul',
        items: ['confidential mediation,', 'binding arbitration,', 'or other dispute resolution procedures.']
      },
      { type: 'p', text: 'Where legally permitted, users waive participation in:' },
      { type: 'ul', items: ['class actions,', 'collective actions,', 'or representative proceedings.'] },
      { type: 'p', text: 'Users may pursue eligible claims in small claims court where permitted by law.' }
    ]
  },
  {
    id: 'severability',
    number: '24',
    title: 'Severability',
    items: [
      {
        type: 'p',
        text: 'If any provision of these Terms is determined unenforceable, the remaining provisions shall remain effective.'
      }
    ]
  },
  {
    id: 'no-waiver',
    number: '25',
    title: 'No Waiver',
    items: [
      { type: 'p', text: 'Failure to enforce any provision shall not constitute a waiver of rights.' }
    ]
  },
  {
    id: 'assignment',
    number: '26',
    title: 'Assignment',
    items: [
      { type: 'p', text: 'Suuvo may assign these Terms without restriction.' },
      { type: 'p', text: 'Users may not assign rights or obligations without written consent.' }
    ]
  },
  {
    id: 'changes-to-terms',
    number: '27',
    title: 'Changes to Terms',
    items: [
      { type: 'p', text: 'Suuvo may modify these Terms at any time.' },
      {
        type: 'p',
        text: 'Continued use of the platform following updates constitutes acceptance of the revised Terms.'
      }
    ]
  },
  {
    id: 'entire-agreement',
    number: '28',
    title: 'Entire Agreement',
    items: [
      {
        type: 'p',
        text: 'These Terms constitute the complete agreement between users and Suuvo regarding platform use and supersede prior agreements or understandings relating to platform access or use.'
      }
    ]
  },
  {
    id: 'contact-information',
    number: '29',
    title: 'Contact Information',
    items: [
      { type: 'p', text: 'SUUVO, INC.\n1201 N Market Street, Suite 111\nWilmington, DE 19801\nUnited States' },
      { type: 'p', text: 'Legal Contact Email: Legal@suuvo.com' },
      { type: 'p', text: 'Support Contact Email: Support@Suuvo.com' }
    ]
  },
  {
    id: 'acknowledgment',
    number: '30',
    title: 'Final Acknowledgment',
    items: [
      { type: 'p', text: 'By using Suuvo, users acknowledge that:' },
      {
        type: 'ul',
        items: [
          'platform participation is conditional,',
          'monetization is not guaranteed,',
          'enforcement actions may occur,',
          'automated systems may assist moderation,',
          'visibility and distribution may fluctuate,',
          'content may be restricted or removed,',
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

export default function TermsAndConditionsView() {
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
      <div className='bg-[linear-gradient(135deg,#EF9F22_0%,#DE127B_100%)] relative overflow-hidden'>
        <div className='absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none' />
        <div className='absolute top-16 left-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none' />
        <div className='absolute -bottom-16 right-1/3 w-80 h-80 rounded-full bg-black/10 blur-3xl pointer-events-none' />

        <div className='s-container pt-20 pb-16 md:pt-28 md:pb-20 relative z-10'>
          <p className='text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase mb-3'>
            Suuvo, Inc.
          </p>
          <Typography variant='h2' className='text-white leading-tight! max-w-2xl'>
            Terms &amp; Conditions
          </Typography>
          <p className='mt-4 text-[15px] md:text-[16px] font-medium leading-6 tracking-[-0.02em] text-white/70 max-w-xl'>
            The complete agreement governing your access to and use of the Suuvo platform and all related services.
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
            {['30 Sections', 'Applies to All Users', 'Delaware Law Governed'].map(label => (
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
                          ? 'bg-[linear-gradient(135deg,#EF9F22_0%,#DE127B_100%)] text-white'
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
