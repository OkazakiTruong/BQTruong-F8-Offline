export default function MindmapHeader() {
  const [rfInstance, setRfInstance] = useState(null);
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);
  return (
    <div className="1250px mx-auto px-[25px] flex justify-between">
      <div className="flex flex-col mb-[10px]">
        <input type="text" value="Mindmap không tên" className="text-4xl " />
        <input type="text" value="Không có title" />
      </div>
      <div className="font-bold text-white flex gap-x-[10px] h-fit">
        <button className="p-[12px] bg-blue-400 rounded-[10px] hover:bg-blue-600">
          Lưu mindmap
        </button>
        <button className="p-[14px] bg-blue-400 rounded-[10px] hover:bg-blue-600">
          Chia sẻ
        </button>
      </div>
    </div>
  );
}
