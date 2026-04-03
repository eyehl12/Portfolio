function PortfolioCard({ eyebrow, title, description, children, featured = false }) {
  return (
    <article
      className={[
        'group rounded-4xl border p-5 shadow-[0_22px_45px_rgba(154,52,18,0.14)] backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(124,45,18,0.22)] sm:p-6',
        featured
          ? 'border-orange-200/90 bg-[linear-gradient(180deg,rgba(255,247,237,0.96),rgba(255,237,213,0.88))]'
          : 'border-orange-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,247,237,0.82))]',
      ].join(' ')}
    >
      <div className="flex h-full flex-col">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-700">
            {eyebrow}
          </p>
          <h3 className="mt-3 font-['Fraunces',Georgia,serif] text-2xl leading-tight text-stone-950 sm:text-[2rem]">
            {title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-6 flex-1">{children}</div>
      </div>
    </article>
  )
}

export default PortfolioCard