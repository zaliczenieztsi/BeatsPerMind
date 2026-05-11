import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <SliderPrimitive.Root
      className={cn("data-horizontal:w-full data-vertical:h-full cursor-pointer", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}>
      <SliderPrimitive.Control
        className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-[oklch(1_0_0/12%)] select-none data-horizontal:h-1.5 data-horizontal:w-full data-vertical:h-full data-vertical:w-1.5 shadow-inset">
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="bg-[oklch(0.55_0.15_150)] select-none data-horizontal:h-full data-vertical:w-full rounded-full shadow-[0_0_14px_oklch(0.55_0.15_150/0.6)]" />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="relative block size-4 shrink-0 rounded-full border-2 border-[oklch(0.55_0.15_150)] bg-[oklch(0.55_0.15_150)] ring-[oklch(0.55_0.15_150/0.4)] shadow-[0_0_16px_oklch(0.55_0.15_150/0.65)] transition-all duration-200 select-none hover:scale-110 hover:ring-2 hover:ring-[oklch(0.55_0.15_150/0.6)] hover:shadow-[0_0_20px_oklch(0.55_0.15_150/0.75)] focus-visible:ring-2 focus-visible:outline-hidden active:scale-95 disabled:pointer-events-none disabled:opacity-50" />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider }