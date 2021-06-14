<?php
include_once 'ApiView.php';
use Carbon\Carbon;


class APIExcelDownload extends APIView
{
    public function response($data, $status)
    {

        $date = Carbon::now()->timezone('America/Buenos_Aires')->isoFormat("DD-MM-YYYY hh.mm" );

        SimpleXLSXGen::fromArray($data)
            ->downloadAs('reporte_retiros '. $date.'.xlsx');
        }
}
