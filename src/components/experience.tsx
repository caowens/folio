'use client';
import { SectionWrapper } from "./section-wrapper";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from '@/components/ui/shadcn-io/tabs';

export default function Experience() {
    return (
        <SectionWrapper idName="Experience">
            <Tabs defaultValue="Experience" className="w-full rounded-lg">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Experience</TabsTrigger>
                    <TabsTrigger value="password">Education</TabsTrigger>
                </TabsList>
                <TabsContents className="mx-1 mb-1 -mt-2 rounded-sm h-full border-chart-1">
                    <TabsContent value="account" className="space-y-6 p-6">
                    <p className="text-sm text-muted-foreground">
                        Make changes to your account here. Click save when you&apos;re done.
                    </p>
                    </TabsContent>
                    <TabsContent value="password" className="space-y-6 p-6">
                    <p className="text-sm text-muted-foreground">
                        Change your password here. After saving, you&apos;ll be logged out.
                    </p>
                    </TabsContent>
                </TabsContents>
            </Tabs>
        </SectionWrapper>
    );
};
