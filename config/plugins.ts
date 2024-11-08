// plugins.js
module.exports = ({ env }) => ({
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: "html",
        editorConfig: {
          language: "pt_BR",
          height: 1000,
          extended_valid_elements: "span, img, small",
          forced_root_block: "",
          convert_urls: false,
          entity_encoding: "raw",
          plugins:
            "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion",
          toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
          content_css: false,
          menubar: true,
          style_formats: [
            {
              title: "Headings",
              items: [
                { title: "h1", block: "h1" },
                { title: "h2", block: "h2" },
                { title: "h3", block: "h3" },
                { title: "h4", block: "h4" },
                { title: "h5", block: "h5" },
                { title: "h6", block: "h6" }
              ]
            }
          ]
        }
      }
    }
  }
});
