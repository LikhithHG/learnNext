import { Card } from "@/components/page";
import Link from 'next/link'

export default function ArchivedNotifications() {
    return (
        <Card>
            <div>Archived Notifications</div>
            <div>
                <Link href="/complex-dashboard">Default</Link>
            </div>
        </Card>
    );
}