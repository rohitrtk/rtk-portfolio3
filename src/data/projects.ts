import type { Project } from '@/types/project';

export const projects = [
  {
    title: 'MapleRoom',
    description:
      'A local-first TFSA planner that estimates contribution room, charts saving activity, and manages contributions, withdrawals, CSV imports, and recurring schedules with data stored in SQLite.',
    tags: ['react', 'typescript', 'tailwind', 'python', 'sqlite'],
    link: 'https://github.com/rohitrtk/maple-room',
    coverImage: {
      src: '/projects/maple-room/maple-room-1.webp',
      alt: 'MapleRoom TFSA dashboard with estimated contribution room and annual summaries',
      position: 'top',
    },
    images: [
      {
        src: '/projects/maple-room/maple-room-1.webp',
        alt: 'MapleRoom TFSA dashboard with estimated contribution room and annual summaries',
        caption:
          'The dashboard estimates available TFSA room and summarizes contributions, monthly pace, and projected room exhaustion.',
      },
      {
        src: '/projects/maple-room/maple-room-2.webp',
        alt: 'MapleRoom monthly contribution and annual activity charts',
        caption:
          'Monthly and annual charts provide visual context for contributions, withdrawals, and new annual room.',
      },
      {
        src: '/projects/maple-room/maple-room-3.webp',
        alt: 'MapleRoom local TFSA profile dialog',
        caption:
          'A local profile personalizes the dashboard and determines when TFSA room began accruing.',
      },
      {
        src: '/projects/maple-room/maple-room-4.webp',
        alt: 'MapleRoom batch TFSA activity entry form',
        caption:
          'The batch-entry workflow supports contributions, withdrawals, CSV imports, notes, institutions, and important flags.',
      },
      {
        src: '/projects/maple-room/maple-room-5.webp',
        alt: 'MapleRoom expanded batch activity form with multiple entries',
        caption:
          'Multiple entries can be reviewed, validated, expanded, or removed before they are saved together.',
      },
      {
        src: '/projects/maple-room/maple-room-6.webp',
        alt: 'MapleRoom recurring contribution schedule list',
        caption:
          'Recurring contribution schedules automatically add due entries to the local ledger exactly once.',
      },
      {
        src: '/projects/maple-room/maple-room-7.webp',
        alt: 'MapleRoom recurring contribution creation form',
        caption:
          'Monthly schedules support configurable amounts, contribution days, date ranges, institutions, and notes.',
      },
      {
        src: '/projects/maple-room/maple-room-8.webp',
        alt: 'MapleRoom searchable TFSA contribution activity ledger',
        caption:
          'The activity ledger combines manual and recurring entries with search, filtering, flags, and row actions.',
      },
      {
        src: '/projects/maple-room/maple-room-10.webp',
        alt: 'MapleRoom paginated recurring contribution history',
        caption:
          'Server-side pagination keeps long contribution histories manageable as the local ledger grows.',
      },
    ],
  },
  {
    title: 'Opening Bell',
    description:
      'A pre-market research dashboard that turns recent financial news and market data into a ranked watchlist of stocks and ETFs, with attention, direction, and confidence signals.',
    tags: ['react', 'typescript', 'tailwind', 'python'],
    link: 'https://github.com/rohitrtk/opening-bell',
    coverImage: {
      src: '/projects/opening-bell/opening-bell-1.webp',
      alt: 'Opening Bell morning brief dashboard with market news tone and ranked watchlist',
      position: 'top',
    },
    images: [
      {
        src: '/projects/opening-bell/opening-bell-1.webp',
        alt: 'Opening Bell morning brief dashboard with market news tone and ranked watchlist',
        caption:
          'The morning brief summarizes market news tone and ranks stocks and ETFs by recent news attention.',
      },
      {
        src: '/projects/opening-bell/opening-bell-2.webp',
        alt: 'Opening Bell watchlist and signal methodology',
        caption:
          "The watchlist presents likely direction, price movement, attention, confidence, and each ticker's top catalyst.",
      },
      {
        src: '/projects/opening-bell/opening-bell-3.webp',
        alt: 'Opening Bell ticker signal overview drawer',
        caption:
          'The signal overview explains why a ticker is ranked and displays the news stories contributing to its score.',
      },
      {
        src: '/projects/opening-bell/opening-bell-4.webp',
        alt: 'Opening Bell ticker technical metrics drawer',
        caption:
          'The technicals view combines current market data with range, volume, valuation, earnings, and company metrics.',
      },
      {
        src: '/projects/opening-bell/opening-bell-5.webp',
        alt: 'Opening Bell six-month candlestick chart',
        caption:
          'A six-month daily candlestick chart provides price context for each news-derived signal.',
      },
    ],
  },
  {
    title: 'FiLearn',
    description:
      'An online learning platform for finance and crypto. Completing quizzes rewards the user with FILEARN tokens.',
    tags: ['nextjs', 'typescript', 'solidity', 'tailwind', 'prisma', 'hardhat'],
    link: 'https://github.com/rohitrtk/fi-learn',
    coverImage: {
      src: '/projects/fi-learn/fi-learn-1.webp',
      alt: 'FiLearn welcome screen',
      position: 'top',
    },
    images: [
      {
        src: '/projects/fi-learn/fi-learn-1.webp',
        alt: 'FiLearn user dashboard',
        caption: 'The FiLearn welcome screen.',
      },
      {
        src: '/projects/fi-learn/fi-learn-2.webp',
        alt: 'FiLearn user dashboard',
        caption: 'User dashboard containing learning modules.',
      },
      {
        src: '/projects/fi-learn/fi-learn-3.webp',
        alt: 'FiLearn mutual fund module introduction',
        caption:
          'The mutual funds module begins by explaining what mutual funds are.',
      },
      {
        src: '/projects/fi-learn/fi-learn-4.webp',
        alt: 'FiLearn mutual fund benefits section',
        caption: 'The module explains why mutual funds can be useful.',
      },
      {
        src: '/projects/fi-learn/fi-learn-5.webp',
        alt: 'FiLearn mutual fund investing section',
        caption:
          'The module outlines why someone might choose to invest in mutual funds.',
      },
      {
        src: '/projects/fi-learn/fi-learn-6.webp',
        alt: 'FiLearn mutual fund module conclusion',
        caption: 'The module concludes with a summary of the material.',
      },
      {
        src: '/projects/fi-learn/fi-learn-7.webp',
        alt: 'FiLearn mutual fund quiz',
        caption:
          'Each module ends with a quiz. Upon completion, the user is rewarded with FILEARN tokens on Ethereum Sepolia.',
      },
    ],
  },
  {
    title: 'Kisto Coin',
    description:
      'To learn more about blockchain, I created a bare-bones, account-based proof-of-work blockchain that allows users to create wallets and send Kisto Coins to one another.',
    tags: ['react', 'typescript', 'tailwind', 'java', 'spring'],
    link: 'https://github.com/rohitrtk/kisto-coin',
    coverImage: {
      src: '/projects/kisto-coin/kisto-coin-1.webp',
      alt: 'Kisto Coin wallets dashboard',
      position: 'top',
    },
    images: [
      {
        src: '/projects/kisto-coin/kisto-coin-1.webp',
        alt: 'Kisto Coin wallet creation dialog',
        caption: 'The Kisto Coin wallets dashboard.',
      },
      {
        src: '/projects/kisto-coin/kisto-coin-2.webp',
        alt: 'Kisto Coin wallet creation dialog',
        caption: 'Creating a new blockchain wallet.',
      },
      {
        src: '/projects/kisto-coin/kisto-coin-3.webp',
        alt: 'Kisto Coin transfer form',
        caption:
          'Sending Kisto Coin across the blockchain to another wallet address.',
      },
      {
        src: '/projects/kisto-coin/kisto-coin-4.webp',
        alt: 'Kisto Coin blockchain settings',
        caption:
          'Adjusting the mining difficulty and mining reward for each block.',
      },
      {
        src: '/projects/kisto-coin/kisto-coin-5.webp',
        alt: 'Kisto Coin wallet actions menu',
        caption: 'Available actions for a wallet.',
      },
      {
        src: '/projects/kisto-coin/kisto-coin-6.webp',
        alt: 'Kisto Coin wallet deletion dialog',
        caption: 'A confirmation warning displayed before deleting a wallet.',
      },
      {
        src: '/projects/kisto-coin/kisto-coin-7.webp',
        alt: 'Kisto Coin blockchain grid',
        caption:
          'The blockchain grid contains every block and its associated metadata.',
      },
      {
        src: '/projects/kisto-coin/kisto-coin-8.webp',
        alt: 'Kisto Coin block inspector',
        caption:
          'The individual block inspector displays the transactions and metadata contained in a block.',
      },
    ],
  },
  {
    title: 'SQL Release Note Tool',
    description:
      'Written as part of a yearly competition at Kenna, two colleagues and I created a desktop application that assists with creating release notes used to move SQL code through our deployment environments.',
    tags: ['tauri', 'rust', 'react', 'typescript', 'tailwind', 'mssql'],
    proprietary: true,
  },
  {
    title: 'Instagram 4 Pomeranians',
    description:
      'An Instagram clone with a twist: users can only upload pictures of my favourite dog breed, the Pomeranian. This is enforced through image recognition.',
    tags: ['react', 'typescript', 'mongodb', 'node', 'express'],
    link: 'https://github.com/rohitrtk/pomstagram',
  },
] satisfies Project[];
