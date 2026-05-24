import { Button, Tooltip } from '@heroui/react';
import { useAppearance } from '@/hooks/use-appearance';
import { Sun, Moon, Monitor } from 'lucide-react';

/**
 * ThemeToggle — cycles between light → dark → system
 * and applies the correct class + data-theme to <html>
 * following HeroUI's theming system.
 */
export default function ThemeToggle() {
    const { appearance, resolvedAppearance, updateAppearance } = useAppearance();

    const cycleTheme = () => {
        if (appearance === 'light') updateAppearance('dark');
        else if (appearance === 'dark') updateAppearance('system');
        else updateAppearance('light');
    };

    const label =
        appearance === 'light'
            ? 'Light mode (click for Dark)'
            : appearance === 'dark'
              ? 'Dark mode (click for System)'
              : 'System mode (click for Light)';

    const Icon =
        appearance === 'system'
            ? Monitor
            : resolvedAppearance === 'dark'
              ? Sun
              : Moon;

    return (
        <Tooltip>
            <Tooltip.Trigger>
                <Button
                    isIconOnly
                    variant="ghost"
                    size="sm"
                    onPress={cycleTheme}
                    aria-label={label}
                    className="text-foreground hover:bg-default-hover transition-colors duration-200"
                >
                    <Icon className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
                </Button>
            </Tooltip.Trigger>
            <Tooltip.Content placement="bottom">
                {label}
            </Tooltip.Content>
        </Tooltip>
    );
}
