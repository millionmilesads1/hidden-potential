import { NextRequest, NextResponse } from 'next/server';

/**
 * IndexNow API Route
 *
 * Notifies Bing, Yandex, and other IndexNow-supporting search engines about
 * new or updated URLs immediately - no waiting for the next crawl.
 *
 * HOW TO TRIGGER:
 *
 * 1. Manually - POST to /api/indexnow with a list of relative paths:
 *      curl -X POST https://hiddenpotentialskills.com/api/indexnow \
 *        -H "Content-Type: application/json" \
 *        -d '{"urls": ["/blog/new-post", "/services/new-service"]}'
 *
 * 2. Via CMS webhook - connect your CMS (e.g. Sanity, Contentful) to fire
 *    a POST to this endpoint whenever content is published or updated.
 *
 * 3. Via Vercel deploy hook - add a postDeploy script or Vercel webhook that
 *    calls this endpoint after each production deployment to ping all
 *    important URLs at once (see the IMPORTANT_URLS list in this file).
 *
 * The key verification file is served at:
 *   https://hiddenpotentialskills.com/f635871fe46fe146b855f5ccebd9a26e.txt
 */

const INDEXNOW_KEY = 'f635871fe46fe146b855f5ccebd9a26e';
const HOST = 'hiddenpotentialskills.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

/** Ping these URLs automatically when no urlList is provided (e.g. deploy hook). */
const IMPORTANT_URLS = [
  '/',
  '/about',
  '/assessment',
  '/contact',
  '/blog',
  '/programs/enlightened-learner',
  '/programs/communication-mastery',
  '/programs/self-mastery-women',
  '/programs/train-the-trainer',
  '/programs/art-therapy',
  '/services/nlp-coaching',
  '/services/confidence-building',
  '/services/communication-skills',
  '/services/study-skills',
  '/services/stress-management',
  '/services/emotional-intelligence',
  '/services/goal-setting',
  '/services/career-guidance',
  '/services/workshops',
  '/locations/delhi',
  '/locations/noida',
  '/locations/gurgaon',
  '/locations/faridabad',
  '/for/professionals',
  '/for/young-adults',
  '/for/schools',
  '/success-stories',
  '/faq',
  '/enroll',
];

export async function POST(request: NextRequest) {
  let urlPaths: string[] = IMPORTANT_URLS;

  try {
    const body = await request.json();
    if (Array.isArray(body?.urls) && body.urls.length > 0) {
      urlPaths = body.urls;
    }
  } catch {
    // No body or invalid JSON - fall through to use IMPORTANT_URLS
  }

  // Convert relative paths to absolute URLs
  const urlList = urlPaths.map((path) =>
    path.startsWith('http') ? path : `https://${HOST}${path}`
  );

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    // IndexNow returns 200 or 202 on success
    if (response.ok || response.status === 202) {
      return NextResponse.json(
        { success: true, submitted: urlList.length, urls: urlList },
        { status: 200 }
      );
    }

    const text = await response.text();
    return NextResponse.json(
      { success: false, error: `IndexNow returned ${response.status}`, detail: text },
      { status: 502 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Failed to reach IndexNow API', detail: String(err) },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json(
    { error: 'Use POST to submit URLs to IndexNow.' },
    { status: 405 }
  );
}
