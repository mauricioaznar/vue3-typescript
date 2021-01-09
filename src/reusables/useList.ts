import {Ref, ref} from "vue";

interface ListEntry {
    id: number;
}

interface List<T extends  ListEntry> {
    entries: Ref<T[] | null>;
}

export function useList<T extends ListEntry>(): List<T>{
    const entries = ref<T[]>([]) as Ref<T[]>

    return {
        entries
    }
}