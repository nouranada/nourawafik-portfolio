interface MetadataGridProps {
  role: string;
  timeline: string;
  platform: string;
  status: string;
}

const labels: Record<keyof MetadataGridProps, string> = {
  role: 'Role',
  timeline: 'Timeline',
  platform: 'Platform',
  status: 'Status',
};

export function MetadataGrid({ role, timeline, platform, status }: MetadataGridProps) {
  const items = [
    { label: labels.role, value: role },
    { label: labels.timeline, value: timeline },
    { label: labels.platform, value: platform },
    { label: labels.status, value: status },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-4">
      {items.map(({ label, value }) => (
        <div key={label}>
          <dt className="font-mono text-[0.8125rem] text-foreground-subtle mb-1">{label}</dt>
          <dd className="text-[0.875rem] text-foreground">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
