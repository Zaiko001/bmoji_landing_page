import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";


// Versions
import Version01 from "@/components/versions/Version01";

type VersionChanges = {
  [key: string]: React.FC;
};

const versionChanges: VersionChanges = {
  "Version 0.1": Version01,
};

const ChangelogPage: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<string>("Version 0.1");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleVersionChange = (version: string) => {
    setSelectedVersion(version);
  };

  const SelectedComponent = versionChanges[selectedVersion];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Tabs aria-label="Versions" disabledKeys={["Mini-App"]} className="mt-5">
          <Tab key="Website" title="Website">
            <div className="flex flex-col items-center justify-center gap-3 w-fit h-fit">
              <div className="flex justify-between">
                <Select
                  size="sm"
                  value={selectedVersion}
                  onChange={(e) => handleVersionChange(e.target.value)}
                  placeholder={selectedVersion}
                  aria-label="Version Selector"
                  label="Select version"
                  labelPlacement="inside"
                  radius="lg"
                  className="m-3 w-[140px]"
                  disallowEmptySelection={true}
                >
                  {Object.keys(versionChanges).map((version) => (
                    <SelectItem key={version} value={version}>
                      {version}
                    </SelectItem>
                  ))}
                </Select>
                <Button onPress={onOpen} color="secondary" className="min-h-[48px] m-3">
                  <span className="w-fit">More Info</span>
                </Button>
              </div>
              <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">How to update the changelog?</ModalHeader>
                      <ModalBody>
                        <p>● Go to <span className="text-orange-500">components/versions</span>
                          <br/>
                          <br/>
                          ● Create your version here. For example: <span className="text-blue-500">Version02.tsx</span>
                          <br/>
                          <br/>
                          ● Go to <span className="text-orange-500">pages/changelog/index.tsx</span>
                          <br/>
                          <br/>   
                          ● Import your version, add your version to <span className="text-purple-500">versionChanges</span>
                          <br/>
                          <br/>
                          ● Edit <span className="text-blue-500">Version02.tsx</span> and watch the magic!
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onPress={onClose}>
                          Instructions on Github
                        </Button>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
              <div className="center m-3 pt-10 pb-10 pl-3 pr-3 bg-default-100 rounded-lg sm:max-w-[350]">
                <SelectedComponent/>
              </div>
            </div>
          </Tab>
          <Tab key="Mini-App" title="Mini-App">
          </Tab>
        </Tabs>
      </section>
    </DefaultLayout>
  );
};

export default ChangelogPage;
