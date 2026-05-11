import { ImageResponse } from 'next/og';
import { ibmPlexArabicFont } from '@/lib/og-fonts';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [arabic400, arabic500] = await Promise.all([
    ibmPlexArabicFont(400),
    ibmPlexArabicFont(500),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          height: '100%',
          backgroundColor: '#FAFAF9',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontFamily: 'IBMPlexArabic', fontWeight: 400, fontSize: 13, color: '#9CA3AF', textAlign: 'right' }}>
          nourawafik.com
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-end' }}>
          <div
            style={{
              fontFamily: 'IBMPlexArabic',
              fontWeight: 500,
              fontSize: 80,
              color: '#1F2937',
              lineHeight: 1.3,
              textAlign: 'right',
            }}
          >
            نورا وفيق
          </div>
          <div style={{ fontFamily: 'IBMPlexArabic', fontWeight: 400, fontSize: 36, color: '#374151', lineHeight: 1.6, textAlign: 'right' }}>
            مصممة منتجات رقمية
          </div>
        </div>

        <div style={{ display: 'flex', fontFamily: 'IBMPlexArabic', fontWeight: 400, fontSize: 13, color: '#9CA3AF', textAlign: 'right' }}>
          مصممة منتجات · القاهرة
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'IBMPlexArabic', data: arabic400, weight: 400, style: 'normal' },
        { name: 'IBMPlexArabic', data: arabic500, weight: 500, style: 'normal' },
      ],
    }
  );
}
