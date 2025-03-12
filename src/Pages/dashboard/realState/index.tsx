import { useFormik } from "formik";
import Button from "../../../components/ui/atoms/Button";
import LayoutProfile from "../../../components/profile/LayoutProfile";
import InputState from "../../../components/ui/atoms/input/inputState";
import ComboBox from "../../../components/common/Combo";
import useCreateAnnounceMutation from "../../../hooks/mutation/announce/useCreateAnnounceMutation";

export default function Realstate() {
  const { mutate } = useCreateAnnounceMutation();

  const formik = useFormik({
    initialValues: {
        "loan": 2199,
        "type": "rent",
        "region": "منطقه 1",
        "address": "خیابان اوراز",
        "location": "جنوبی",
        "usage": "مسکونی",
        "document_type": "سند رسمی",
        "land_metrage": 200,
        "useful_metrage": 150,
        "floor_number": 2,
        "floor": 1,
        "Unit_in_floor": 1,
        "year_of_build": 1998,
        "full_name": "علی رضایی",
        "price": 20000,
        "room_number": 4,
        "features": "دارای پارکینگ و آسانسور",
        "province": "سنندج",
        "city": "سنندج",
        "zone": "1",
      
    },
    onSubmit: (values) => {
      const requestData = {
        loan: values.loan || null,
        type: values.type || "any",
        region: values.zone || "any",
        address: values.address || "",
        location: values.location || "any",
        usage: values.usage || "any",
        document_type: values.document_type || "any",
        land_metrage: values.land_metrage ? Number(values.land_metrage) : null,
        useful_metrage: values.useful_metrage ? Number(values.useful_metrage) : null,
        floor_number: values.floor_number ? Number(values.floor_number) : null,
        floor: values.floor ? Number(values.floor) : null,
        Unit_in_floor: values.Unit_in_floor ? Number(values.Unit_in_floor) : null,
        year_of_build: values.year_of_build ? Number(values.year_of_build) : null,
        full_name: values.full_name || "نام پیش‌فرض",
        price: values.price ? Number(values.price) : null,
        room_number: values.room_number ? Number(values.room_number) : null,
        features: values.features || "",
      };

      console.log("📤 داده‌ی نهایی که ارسال می‌شود:", requestData);
      mutate(requestData as any);
    },
  });

  return (
    <LayoutProfile>
      <div className="w-full flex flex-col items-center justify-center my-16">
        <div className="flex flex-col items-center gap-4 mobile:gap-2">
          <h1 className="text-[1.5rem] mobile:text-[18px]">ثبت آگهی جدید</h1>
          <span className="h-[2px] w-[70%] bg-[#09A380]"></span>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <div className="grid lg:grid-cols-2 lg:gap-10 w-full">
            <InputState label="استان" name="province" value={formik.values.province} onChange={formik.handleChange} />
            <InputState label="شهرستان" name="city" value={formik.values.city} onChange={formik.handleChange} />
            <ComboBox label="منطقه" options={["منطقه 1", "منطقه 2"]} name="zone" value={formik.values.zone} onChange={(val) => formik.setFieldValue("zone", val)} />
            <InputState label="آدرس ملک" name="address" value={formik.values.address} onChange={formik.handleChange} />
            <ComboBox label="نوع کاربری" options={["مسکونی", "تجاری"]} name="usage" value={formik.values.usage} onChange={(val) => formik.setFieldValue("usage", val)} />
            <ComboBox label="نوع مالکیت" options={["قولنامه", "سند رسمی"]} name="document_type" value={formik.values.document_type} onChange={(val) => formik.setFieldValue("document_type", val)} />
            <ComboBox label="موقعیت ملک" options={["جنوبی", "شمالی"]} name="location" value={formik.values.location} onChange={(val) => formik.setFieldValue("location", val)} />

            {/* فیلدهای عددی که تبدیل به استرینگ شده‌اند */}
            <InputState label="متراژ زمین" name="land_metrage" value={formik.values.land_metrage.toString()} onChange={(e) => formik.setFieldValue("land_metrage", Number(e.target.value))} />
            <InputState label="متراژ مفید" name="useful_metrage" value={formik.values.useful_metrage.toString()} onChange={(e) => formik.setFieldValue("useful_metrage", Number(e.target.value))} />
            <InputState label="تعداد طبقات" name="floor_number" value={formik.values.floor_number.toString()} onChange={(e) => formik.setFieldValue("floor_number", Number(e.target.value))} />
            <InputState label="طبقه" name="floor" value={formik.values.floor.toString()} onChange={(e) => formik.setFieldValue("floor", Number(e.target.value))} />
            <InputState label="واحد در طبقه" name="Unit_in_floor" value={formik.values.Unit_in_floor.toString()} onChange={(e) => formik.setFieldValue("Unit_in_floor", Number(e.target.value))} />
            <InputState label="سال ساخت" name="year_of_build" value={formik.values.year_of_build.toString()} onChange={(e) => formik.setFieldValue("year_of_build", Number(e.target.value))} />
            <InputState label="نام مالک" name="full_name" value={formik.values.full_name} onChange={formik.handleChange} />
            <InputState label="قیمت" name="price" value={formik.values.price.toString()} onChange={(e) => formik.setFieldValue("price", Number(e.target.value))} />
            <InputState label="تعداد اتاق‌ها" name="room_number" value={formik.values.room_number.toString()} onChange={(e) => formik.setFieldValue("room_number", Number(e.target.value))} />
            <InputState label="ویژگی‌ها" name="features" value={formik.values.features} onChange={formik.handleChange} />
          </div>
        </div>
        <div className="w-[90%] flex items-center justify-end">
          <Button submit="true" width="110px" height="50px" bgcolor="#09A380" borderradius="30px" color="white" type="submit">
            <p className="text-[1rem] font-bold">ثبت</p>
          </Button>
        </div>
      </form>
    </LayoutProfile>
  );
}
