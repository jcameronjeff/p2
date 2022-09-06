interface IGalleryProps {
  title: string,
  subtitle: string,
  usage: string,
  gallery: React.FC<{ textColor?: string, iconClass?: string }>
}
export const IconGallery = ({title, subtitle, usage, gallery: Gallery}:IGalleryProps) => (
  <>
  <header className="text-center my-4 pb-4">
    <h1 className="prism-heading-1 font-alt tracking-tight text-center">{title} Icon Set</h1>
    <h2 className='text-center mb-4'>{subtitle}</h2>
    <div className='tracking-tight w-[540px] bg-slate-100 text-slate-700 rounded font-mono p-4 shadow-inner border border-gray-300/50 m-auto mb-8 text-xs'>
      <pre>{usage}</pre>
    </div>
  </header>
  <Gallery />
  </>
)
