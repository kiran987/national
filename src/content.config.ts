import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// ─── Schemas ─────────────────────────────────────────────────────────────────

const programTierDetail = z.object({
  name: z.string(),
  badge: z.string().optional(),
  ages: z.string(),
  format: z.string(),
  focus: z.string(),
  ratio: z.string(),
  curriculum: z.array(z.string()),
});

const programFAQ = z.object({
  question: z.string(),
  answer: z.string(),
});

// ─── Programs ─────────────────────────────────────────────────────────────────

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    name: z.string(),
    navTitle: z.string(),
    shortName: z.string(),
    badge: z.string(),
    subtitle: z.string(),
    tagline: z.string(),
    emoji: z.string(),
    icon: z.string(),
    color: z.string(),
    accentColor: z.string(),
    bgColor: z.string(),
    description: z.string(),
    ages: z.string(),
    ratio: z.string(),
    venue: z.string(),
    seasonDuration: z.string(),
    sessionsPerWeek: z.string(),
    blockWeeks: z.number(),
    blockPrice: z.number(),
    hourlyRate: z.number(),
    paymentPlan: z.boolean(),
    partnerInfo: z
      .object({
        name: z.string(),
        description: z.string(),
        logo: z.string().optional(),
      })
      .optional(),
    highlights: z.array(z.string()),
    skillsFocus: z.array(z.string()),
    tiers: z.array(programTierDetail),
    whatsIncluded: z.array(z.string()),
    faqs: z.array(programFAQ),
  }),
});

// ─── Coaches ─────────────────────────────────────────────────────────────────

const coaches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/coaches' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    sports: z.array(z.string()),
    certifications: z.array(z.string()),
    emoji: z.string(),
    photo: z.string().optional(),
  }),
});

// ─── Schedules ───────────────────────────────────────────────────────────────

const schedules = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/schedules' }),
  schema: z.object({
    program: z.string(),
    tier: z.string(),
    season: z.string(),
    status: z.enum(['Registering Now', 'Upcoming', 'Full', 'Completed']),
    startDate: z.string(),
    endDate: z.string(),
    dayOfWeek: z.string(),
    time: z.string(),
    venue: z.string(),
    spotsTotal: z.number(),
    spotsRemaining: z.number(),
    price: z.number(),
    teamLinktUrl: z.string().url(),
    waitlistUrl: z.string().url().optional(),
    notes: z.string().optional(),
  }),
});

// ─── Camp Sessions ────────────────────────────────────────────────────────────

const campSessions = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/camp-sessions' }),
  schema: z.object({
    name: z.string(),
    campType: z.enum(['Day Camp', 'Evening Clinic', 'School Break Camp', 'PD Day Camp']),
    sport: z.string(),
    ageGroup: z.string(),
    season: z.string(),
    status: z.enum(['Registering Now', 'Upcoming', 'Full', 'Completed']),
    startDate: z.string(),
    endDate: z.string(),
    time: z.string(),
    venue: z.string(),
    spotsTotal: z.number(),
    spotsRemaining: z.number(),
    price: z.number(),
    teamLinktUrl: z.string().url(),
    description: z.string().optional(),
    notes: z.string().optional(),
  }),
});

// ─── Export ───────────────────────────────────────────────────────────────────

export const collections = { programs, coaches, schedules, campSessions };
