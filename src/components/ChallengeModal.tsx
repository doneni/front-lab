import React from 'react';
import Modal from '@mui/material/Modal';
import { Button, Box } from '@mui/material';

interface ChallengeModalProps {
  onClose: () => void; // 모달을 닫기 위한 콜백 함수
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      {/* Modal 안의 컨텐츠 */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <div>
          <p>This is the content of the modal.</p>
          {/* 다양한 모달 컨텐츠를 추가할 수 있음 */}
        </div>

        {/* 모달 닫기 버튼 또는 다른 이벤트를 통해 onClose 호출 */}
        <Button onClick={onClose}>Close Modal</Button>
      </Box>
    </Modal>
  );
};

export default ChallengeModal;
