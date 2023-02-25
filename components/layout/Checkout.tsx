import {
  Button,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  useDisclosure,
  useMediaQuery,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useDropArea } from "react-use";
import CheckoutModelCard from "../card/CheckoutModelCard";

const Checkout = () => {
  const [pembayaran, setPembayaran] = useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const inputFilePrimary = useRef<HTMLInputElement | null>(null);
  const inputFileSecondary = useRef<HTMLInputElement | null>(null);
  const [primaryFile, setPrimaryFile] = useState<File | null>(null);
  const [secondaryFile, setSecondaryFile] = useState<File[]>([]);
  const toast = useToast();

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "1",
    onChange: () => {},
  });

  const [dropAreaBondPrimary, dropAreaStatePrimary] = useDropArea({
    onFiles: (files) => {
      if (files.length > 1) {
        toast({
          title: "Jumlah gambar melebihi batas maksimal!",
          description: "Silahkan pilih hanya satu gambar utama.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      setPrimaryFile(files[files.length - 1]);
    },
    onUri: (uri) => console.log("uri", uri),
    onText: (text) => console.log("text", text),
  });

  const [dropAreaBondSecondary, dropAreaStateSecondary] = useDropArea({
    onFiles: (files) => setSecondaryFile((prev) => [...prev, ...files]),
    onUri: (uri) => console.log("uri", uri),
    onText: (text) => console.log("text", text),
  });

  const onPrimaryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPrimaryFile((prev) => {
        // @ts-expect-error
        if (e.target.files[0]) return e.target.files[0];
        return prev;
      });
    }
  };

  const onSecondaryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    // @ts-expect-error
    setSecondaryFile((prev) => [...prev, ...e.target.files]);
  };

  const removePrimaryFile = () => {
    setPrimaryFile(null);
  };

  const removeSecondaryFile = (data: File) => {
    setSecondaryFile((prev) => {
      return prev.filter((item) => item !== data);
    });
  };

  return (
    <>
      <Container maxW="4xl" className="mt-12 md:mt-20 mb-52">
        <div className="flex flex-col justify-center items-center gap-2 mb-20">
          <Image
            src="/favicon.png"
            width={300}
            height={300}
            alt="logo bluprint"
            className="w-16 h-16"
          />
          <h1 className="font-bold text-2xl md:text-3xl font-inter dark:text-white">
            Pemesanan
          </h1>
          <p className="font-quicksand font-bold text-center text-sm">
            Model atau template yang anda sukai
          </p>
        </div>
        <div>
          <h1 className=" font-bold text-lg">Template</h1>
          <div
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 justify-center mt-10 "
            {...getRootProps()}
          >
            <CheckoutModelCard
              key={1}
              img="fm1.png"
              {...getRadioProps({ value: "1" })}
            />
            <CheckoutModelCard
              key={2}
              img="m1.png"
              {...getRadioProps({ value: "2" })}
            />
            <CheckoutModelCard
              key={3}
              img="m2.png"
              {...getRadioProps({ value: "3" })}
            />
            <CheckoutModelCard
              key={4}
              img="o1.png"
              {...getRadioProps({ value: "4" })}
            />
            <CheckoutModelCard
              key={5}
              img="o2.png"
              {...getRadioProps({ value: "5" })}
            />
            <CheckoutModelCard
              key={6}
              img="sasasas.png"
              {...getRadioProps({ value: "6" })}
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5 ">
          <h1 className="font-bold text-lg">Unggah Foto Utama</h1>
          <div>
            <span className="font-semibold">Ketentuan</span>
            <ul className="list-disc px-6">
              <li>1 Wajah dalam foto</li>
              <li>Wajah dalam foto terlihat jelas</li>
            </ul>
          </div>
          <div
            {...dropAreaBondPrimary}
            className={`border border-dashed p-3 py-10 flex justify-center items-center flex-col gap-5 rounded-md ${
              dropAreaStatePrimary.over
                ? "border-blue-400 bg-blue-100"
                : "border-gray-400"
            }`}
          >
            <p className="font-bold">Drop files here</p>
            <input
              type="file"
              id="imgupload"
              hidden
              accept="image/*"
              ref={inputFilePrimary}
              onChange={onPrimaryFileChange}
            />
            <FaCloudUploadAlt className="text-6xl" />
            <Button
              colorScheme={"facebook"}
              leftIcon={<HiOutlineSearch />}
              onClick={() => {
                inputFilePrimary?.current?.click();
              }}
            >
              Choose file
            </Button>
            <div className="flex flex-wrap justify-center gap-2">
              {primaryFile && (
                <div className="border border-blue-400 hover:shadow-md transition-shadow p-1 relative rounded">
                  <img
                    className="w-56 object-cover"
                    src={URL.createObjectURL(primaryFile)}
                  />
                  <div
                    className="absolute top-2 right-2 text-xl hover:scale-125 hover:text-white hover:bg-blue-500 dark:bg-blue-500 transition-all cursor-pointer bg-gray-200 rounded"
                    onClick={removePrimaryFile}
                  >
                    <IoMdClose />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5 ">
          <h1 className="font-bold text-lg">Unggah Foto Pedukung</h1>
          <div>
            <span className="font-semibold">Ketentuan</span>
            <ul className="list-disc px-6">
              <li>Upload minimal 6 foto pendukung</li>
              <li>Maksimal foto yang ditambahkan adalah 10</li>
            </ul>
          </div>
          <div
            {...dropAreaBondSecondary}
            className={`border border-dashed p-3 py-10 flex justify-center items-center flex-col gap-5 rounded-md ${
              dropAreaStateSecondary.over
                ? "border-blue-400 bg-blue-100"
                : "border-gray-400"
            }`}
          >
            <p className="font-bold">Drop files here</p>
            <input
              type="file"
              id="imgupload"
              hidden
              accept="image/*"
              ref={inputFileSecondary}
              onChange={onSecondaryFileChange}
            />
            <FaCloudUploadAlt className="text-6xl" />
            <Button
              colorScheme={"facebook"}
              leftIcon={<HiOutlineSearch />}
              onClick={() => {
                inputFileSecondary?.current?.click();
              }}
            >
              Choose file
            </Button>
            <div className="flex flex-wrap justify-center gap-2">
              {secondaryFile?.map((data, i) => {
                return (
                  <div
                    key={"primary-" + i}
                    className="border border-blue-400 p-1 relative h-fit rounded hover:shadow-md transition-shadow"
                  >
                    <img
                      className="w-36 object-cover"
                      src={data ? URL.createObjectURL(data) : ""}
                    />
                    <div
                      className="absolute top-2 right-2 text-xl hover:scale-125 dark:bg-blue-500 hover:text-white hover:bg-blue-500 transition-all cursor-pointer bg-gray-200 rounded"
                      onClick={() => removeSecondaryFile(data)}
                    >
                      <IoMdClose />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-lg">Identitas</h1>
          <div className="mt-5 flex flex-col gap-5">
            <Input type="email" placeholder="Alamat email" size={"lg"} />
            <Input type="number" placeholder="Nomor Hp" size={"lg"} />
            <Textarea placeholder="Deskripsi pesanan" />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-lg">Metode Pembayaran</h1>
          <span className="text-sm">Pilih salah satu metode pembayaran</span>
          <div className="mt-5">
            <RadioGroup
              onChange={setPembayaran}
              value={pembayaran}
              className="flex flex-col gap-3"
            >
              <Radio value={"1"}>
                <p className="font-bold">Transfer Virtual Bank Account</p>
              </Radio>
              <div className="ml-5 lg:w-1/2">
                <Select
                  placeholder="Pilih virtual bank account"
                  disabled={pembayaran !== "1"}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </div>
              <Radio value={"2"}>
                <p className="font-bold">Transfer E-Wallet</p>
              </Radio>
              <div className="ml-5 lg:w-1/2">
                <Select
                  placeholder="Pilih e-wallet"
                  disabled={pembayaran !== "2"}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </div>
            </RadioGroup>
          </div>
        </div>
        <Button
          colorScheme={"facebook"}
          className="mt-10 w-full"
          onClick={onOpen}
        >
          Pesan
        </Button>
      </Container>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={isLargerThan1024 ? "xl" : "lg"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shopping summary</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex flex-col gap-4">
            <div className="flex border border-gray-200 rounded-md py-3">
              <Image
                src={"/image/mozaik/bulan.png"}
                width={130}
                height={130}
                alt={""}
                className=""
              />
              <div className="flex flex-col justify-center">
                <h1 className="font-bold">Template Digital Art</h1>
                <p>Mozaik Collase</p>
              </div>
            </div>
            <div className="flex border border-gray-200 rounded-md p-3 flex-col gap-3">
              <h1 className="font-bold">Metode Pembayaran</h1>
              <div className="flex gap-3 items-center border border-gray-200 p-1 rounded-md">
                <Image
                  src={"/image/dana.png"}
                  width={100}
                  height={100}
                  alt={""}
                  className="w-9 "
                />
                <p className="font-semibold">Dana</p>
              </div>
            </div>
            <div className="flex border border-gray-200 rounded-md p-3 flex-col gap-3">
              <h1 className="font-bold">Dikirim ke</h1>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <p>No Hp</p>
                  <p className="font-bold">080808080</p>
                </div>
                <div className="flex justify-between">
                  <p>Email</p>
                  <p className="font-bold">bluprinthink@mail.com</p>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-200 rounded-md p-3 flex-col gap-3 bg-gray-100">
              <h1 className="font-bold">Rincian Pembayaran</h1>
              <div className="flex justify-between">
                <div>
                  <p>Template Mozaik Collase : Softfile</p>
                  <ul className="list-disc ml-7 text-sm">
                    <li>1 File gambar format PNG resolusi 300dpi</li>
                  </ul>
                </div>
                <span>50.000</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>50.000</p>
              </div>
            </div>
          </ModalBody>

          <ModalFooter className="mt-10">
            <Button
              colorScheme="facebook"
              onClick={onClose}
              className="w-full"
              leftIcon={<RiSecurePaymentFill />}
            >
              Bayar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Checkout;
