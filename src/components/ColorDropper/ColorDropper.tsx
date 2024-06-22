import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PreviewColor } from '../PreviewColor/PreviewColor';
import { rgbToHex } from '../../helpers/rgbToHex';
import { PickerIcon } from '../../assets/icons/PickerIcon';
import './ColorDropper.css';

export const ColorDropper: React.FC = () => {
    const [pickedColor, setPickedColor] = useState<string>('#FFFFFF');
    const [previewColor, setPreviewColor] = useState<string>('#FFFFFF');
    const [isDropping, setIsDropping] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const dropperIconRef = useRef<SVGSVGElement | undefined>(undefined);

    const updateColorPreview = useCallback((event: React.MouseEvent<HTMLElement>) => {
        if (!isDropping) return;

        try {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const context = canvas.getContext('2d');
            if (!context) return;

            const { left, top } = canvas.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;

            const imageData = context.getImageData(x, y, 1, 1).data;
            const hexColor = rgbToHex(imageData[0], imageData[1], imageData[2]);

            if (dropperIconRef.current) {
                dropperIconRef.current.style.left = `${window.scrollX + event.clientX}px`;
                dropperIconRef.current.style.top = `${window.scrollY + event.clientY}px`;
            }

            setPreviewColor(hexColor);
        } catch (error) {
            console.error('Error updating color preview:', error);
        }
    }, [isDropping]);

    const handleColorPick = (event: React.MouseEvent<HTMLElement>) => {
        if (!isDropping) return;

        try {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const context = canvas.getContext('2d');
            if (!context) return;

            const { left, top } = canvas.getBoundingClientRect();
            const x = event?.clientX - left;
            const y = event?.clientY - top;

            const imageData = context.getImageData(x, y, 1, 1).data;
            const hexColor = rgbToHex(imageData[0], imageData[1], imageData[2]);

            setPickedColor(hexColor);
            setIsDropping(false);
            if (dropperIconRef.current) {
                dropperIconRef.current.style.display = 'none';
            }
            canvas.style.cursor = 'default';
        } catch (error) {
            console.error('Error picking color:', error);
        }
    };

    const enableColorDropper = () => {
        setIsDropping(true);
        if (dropperIconRef.current) {
            dropperIconRef.current!.style.display = 'block';
        }
        if (canvasRef.current) {
            canvasRef.current!.style.cursor = 'none';
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        for (let i = 0; i < canvas.width; i += 100) {
            for (let j = 0; j < canvas.height; j += 100) {
                context.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                context.fillRect(i, j, 100, 100);
            }
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!dropperIconRef.current) return;

            const rect = dropperIconRef.current.getBoundingClientRect();

            if (rect && rect.top < 0) {
                updateColorPreview({
                    clientX: rect.left + rect.width / 2,
                    clientY: rect.height / 2,
                } as React.MouseEvent<HTMLElement>);
            }
            if (rect && rect.left < 0) {
                updateColorPreview({
                    clientX: rect.width / 2,
                    clientY: rect.top + rect.height / 2,
                } as React.MouseEvent<HTMLElement>);
            }
            if (rect && rect.top + rect.height > window.innerHeight) {
                updateColorPreview({
                    clientX: rect.left + rect.width / 2,
                    clientY: window.innerHeight - rect.height / 2,
                } as React.MouseEvent<HTMLElement>);
            }
            if (rect && rect.left + rect.width > window.innerWidth) {
                updateColorPreview({
                    clientX: window.innerWidth - rect.width / 2,
                    clientY: rect.top + rect.height / 2,
                } as React.MouseEvent<HTMLElement>);
            }
        };

        if (isDropping) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDropping, updateColorPreview]);

    return (
        <>
            <div className="header">
                <PickerIcon className='pickerIcon' onClick={enableColorDropper} />
                <h1 className='title'>
                    Picked Color: <span id="picked-color">{pickedColor}</span>
                </h1>
            </div>
            <canvas
                id="canvas"
                ref={canvasRef}
                width={4000}
                height={4000}
                onMouseMove={updateColorPreview}
                onClick={handleColorPick}
            ></canvas>
            <PreviewColor fill={previewColor} refer={dropperIconRef} />
        </>
    );
};

ColorDropper.displayName = 'ColorDropper';
