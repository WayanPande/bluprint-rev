import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  Kbd,
  ModalHeader,
  Divider,
  useControllableState,
} from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";
import { IoDocumentOutline } from "react-icons/io5";
import { AiOutlineEnter } from "react-icons/ai";
import { CgHashtag } from "react-icons/cg";
import Data from "../../util/searchData.json";
import { useRouter } from "next/router";
import HighlightedText from "./HighlightedText";
import { debounce } from "lodash";

export interface Modalprops {
  isOpen: boolean;
  closeHandler: () => void;
}

interface FilteredDataType {
  name: string;
  type: string;
  url: string;
}

const SearchModal: React.FC<Modalprops> = ({
  isOpen = false,
  closeHandler,
}) => {
  const [value, setValue] = useControllableState({ defaultValue: "" });
  const [cursor, setCursor] = useControllableState({ defaultValue: 0 });
  const [filteredData, setFilteredData] = useState<FilteredDataType[] | []>([]);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) {
      setValue("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (value.length === 0) {
      setCursor(0);
    }
    debouncedSearch();
  }, [value]);

  const debouncedSearch = debounce(() => handleFilter(), 300);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleFilter = () => {
    let temp: FilteredDataType[] = [];
    Data.forEach((item) => {
      if (item.type.toLowerCase().includes(value.toLowerCase())) {
        temp.push(...[{ name: item.type, type: item.type, url: item.url }]); // to get the only model url exp(model/mozaik)
        item.items.forEach((itemData) => {
          temp.push(
            ...[
              {
                name: itemData.name,
                type: item.type,
                url: itemData.url,
              },
            ]
          );
        });
      } else {
        item.items.forEach((itemData) => {
          if (itemData.name.toLowerCase().includes(value.toLowerCase())) {
            temp.push(
              ...[
                {
                  name: itemData.name,
                  type: item.type,
                  url: itemData.url,
                },
              ]
            );
          }
        });
      }
    });

    if (value === "") {
      setFilteredData([]);
    } else {
      setFilteredData(temp);
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key === "ArrowUp" && cursor > 0) {
        setCursor(cursor - 1);
      }

      if (key === "ArrowDown" && cursor < filteredData.length - 1) {
        setCursor(cursor + 1);
      }

      if (key === "Enter" && filteredData.length > 0) {
        router.push(filteredData[cursor].url);
        closeHandler();
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [cursor, router, filteredData]);

  const mouseEnterHandler = (index: number) => {
    setCursor(index);
  };

  return (
    <Modal
      isOpen={isOpen}
      size={{ base: "sm", md: "xl" }}
      onClose={closeHandler}
      scrollBehavior="inside"
    >
      <ModalOverlay bg="blackAlpha.200" backdropFilter="blur(6px)" />
      <ModalContent className="py-3" borderRadius={"lg"}>
        <ModalHeader className="flex flex-col gap-4" paddingBlock={"1"}>
          <div className="flex items-center gap-4">
            <HiOutlineSearch size={"1.5em"} className="text-slate-400" />
            <Input
              variant="unstyled"
              placeholder="Cari template"
              className="font-medium font-inter"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Kbd onClick={closeHandler} className="cursor-pointer">
              Esc
            </Kbd>
          </div>
        </ModalHeader>
        {value.length > 0 && filteredData.length !== 0 && (
          <ModalBody className="flex flex-col gap-4">
            <Divider />
            <div>
              <ul className="flex flex-col gap-3">
                {filteredData.map((item, i) => (
                  <>
                    {item.type.toLowerCase() === item.name.toLowerCase() && (
                      <Link href={item.url}>
                        <li
                          className={`${
                            cursor === i ? "bg-blue-400" : "bg-gray-100"
                          } px-4 py-2 rounded-lg font-bold min-h-[4rem] flex items-center justify-between`}
                          onMouseEnter={() => mouseEnterHandler(i)}
                        >
                          <div
                            className={`flex gap-3 items-center ${
                              cursor === i ? "text-white" : ""
                            }`}
                          >
                            <IoDocumentOutline
                              size={25}
                              className={`${
                                cursor === i ? "text-white/80" : "text-black/30"
                              }`}
                            />
                            <HighlightedText
                              text={item.type}
                              highlight={value}
                              hover={i === cursor}
                            />
                          </div>
                          <AiOutlineEnter
                            size={20}
                            className={`${
                              cursor === i ? "text-white/80" : "text-black/30"
                            }`}
                          />
                        </li>
                      </Link>
                    )}
                    {item.type.toLowerCase() !== item.name.toLowerCase() && (
                      <Link href={item.url}>
                        <li
                          className={`${
                            cursor === i ? "bg-blue-400" : "bg-gray-100"
                          } px-4 py-2 rounded-lg font-bold min-h-[4rem] flex items-center justify-between`}
                          onMouseEnter={() => mouseEnterHandler(i)}
                        >
                          <div
                            className={`flex gap-3 items-center ${
                              cursor === i ? "text-white" : ""
                            }`}
                          >
                            <CgHashtag
                              size={25}
                              className={`${
                                cursor === i ? "text-white/80" : "text-black/30"
                              }`}
                            />
                            <div>
                              <p
                                className={`text-xs ${
                                  cursor === i
                                    ? "text-white/80"
                                    : "text-black/40"
                                } capitalize`}
                              >
                                {item.type}
                              </p>
                              <HighlightedText
                                text={item.name}
                                highlight={value}
                                hover={i === cursor}
                              />
                            </div>
                          </div>
                          <AiOutlineEnter
                            size={20}
                            className={`${
                              cursor === i ? "text-white/80" : "text-black/30"
                            }`}
                          />
                        </li>
                      </Link>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
