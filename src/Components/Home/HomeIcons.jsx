import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  File01Icon,
  Layers01Icon,
  Message01Icon,
  SparklesIcon,
  Tick01Icon,
  Upload01Icon,
  ChevronDownIcon,
  ListViewIcon
} from "@hugeicons/core-free-icons";

const icons = {
  arrow: ArrowRight01Icon,
  file: File01Icon,
  layers: Layers01Icon,
  message: Message01Icon,
  sparkles: SparklesIcon,
  check: Tick01Icon,
  upload: Upload01Icon,
  down: ChevronDownIcon,
  listview: ListViewIcon
}

export default function HomeIcons({ name, size = 22 }) {
  return <HugeiconsIcon icon={icons[name]} size={size} strokeWidth={1.7} aria-hidden="true" />
}