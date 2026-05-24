import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ContactDetail {
    icon: LucideIcon;
    title: string;
    content: string;
    color: string;
}

export const contactDetails: ContactDetail[] = [
    {
        icon: MapPin,
        title: 'Alamat Kantor',
        content: 'Sudirman Central Business District (SCBD), Tower 3A, Lt. 12, Jakarta Selatan, Indonesia 12190',
        color: 'text-indigo-500 bg-indigo-500/10',
    },
    {
        icon: Phone,
        title: 'Hubungi Kami',
        content: '+62 (21) 555-8291 / +62 812-3456-7890',
        color: 'text-purple-500 bg-purple-500/10',
    },
    {
        icon: Mail,
        title: 'Surel / Email Support',
        content: 'inquiries@kodya.com / support@kodya.com',
        color: 'text-pink-500 bg-pink-500/10',
    },
    {
        icon: Clock,
        title: 'Jam Operasional',
        content: 'Senin - Jumat: 09.00 - 18.00 WIB (Sabtu - Minggu Libur)',
        color: 'text-cyan-500 bg-cyan-500/10',
    },
];
