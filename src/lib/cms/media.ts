import { getAllMediaSlots } from "./contentSources";
import { readCmsDataAsync } from "./store";

export async function getMediaAdminState() {
  const cms = await readCmsDataAsync();
  const overrides = cms.mediaOverrides ?? {};
  const slots = getAllMediaSlots().map((slot) => ({
    ...slot,
    currentValue: overrides[slot.id] || slot.defaultValue,
    isCustomized: Boolean(overrides[slot.id]),
  }));

  const groups = Array.from(new Set(slots.map((slot) => slot.group))).map((group) => ({
    name: group,
    slots: slots.filter((slot) => slot.group === group),
  }));

  return { groups, slots };
}
