import { Button } from '@heroui/react';
import { useAppearance } from '@/hooks/use-appearance';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const { resolvedAppearance, updateAppearance } = useAppearance();

    const toggleTheme = () => {
        updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button
            isIconOnly
            variant="ghost"
            size="sm"
            onPress={toggleTheme}
            aria-label="Toggle theme"
            className="text-foreground hover:bg-default-hover"
        >
            {resolvedAppearance === 'dark' ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    );
}
